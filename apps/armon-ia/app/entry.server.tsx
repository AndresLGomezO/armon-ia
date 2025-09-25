import { createReadableStreamFromReadable } from "@react-router/node";
import type {
  ActionFunctionArgs,
  HandleErrorFunction,
  LoaderFunctionArgs,
} from "@remix-run/server-runtime";
import { isbot } from "isbot";
import { PassThrough } from "node:stream";
import type { RenderToPipeableStreamOptions } from "react-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import type { EntryContext } from "react-router";
import { ServerRouter } from "react-router";

export const streamTimeout = 5_000;

const checkIsBot = (userAgent: string | null) => {
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'development') {
    try {
      const { isbot } = require('isbot');
      return userAgent ? isbot(userAgent) : false;
    } catch {
      return false;
    }
  }
  return false;
};

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  // If you have middleware enabled:
  // loadContext: unstable_RouterContextProvider
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const userAgent = request.headers.get("user-agent");

    // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
    // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
    const readyOption: keyof RenderToPipeableStreamOptions =
      (userAgent && checkIsBot(userAgent)) || routerContext.isSpaMode
        ? "onAllReady"
        : "onShellReady";

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            // eslint-disable-next-line no-console
            console.error(error);
          }
        },
      },
    );

    // Abort the rendering stream after the `streamTimeout` so it has time to
    // flush down the rejected boundaries
    setTimeout(abort, streamTimeout + 1000);
  });
}

export const handleError: HandleErrorFunction = (
  error: unknown,
  { request }: LoaderFunctionArgs | ActionFunctionArgs,
) => {
  // React Router may abort some interrupted requests, don't log those
  if (!request.signal.aborted) {
    console.error(
      request.url,
      request.method,
      Object.fromEntries(request.headers.entries()),
      error,
    )
  }
};
