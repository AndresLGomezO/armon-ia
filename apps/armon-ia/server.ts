import express, { type NextFunction, type Request, type Response } from "express";

const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

async function startServer() {
  if (DEVELOPMENT) {
    console.log("Starting development server");

    const vite = await import("vite");
    const viteDevServer = await vite.createServer({
      server: { middlewareMode: true },
    });

    app.use(viteDevServer.middlewares);
    app.use(async (req: Request, res: Response, next: NextFunction) => {
      try {
        const source = await viteDevServer.ssrLoadModule("./server/app.ts");
        return await source.app(req, res, next);
      } catch (error) {
        if (error instanceof Error) {
          viteDevServer.ssrFixStacktrace(error);
        }
        next(error);
      }
    });
  } else {
    console.log("Starting production server");
    app.use(
      "/assets",
      express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
    );
    app.use(express.static("build/client", { maxAge: "1h" }));
    app.use(await import(BUILD_PATH).then((mod) => mod.app));
  }

  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`, { port: PORT });
  });
}

startServer().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});