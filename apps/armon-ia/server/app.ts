import { createRequestHandler } from "@react-router/express";
import express from "express";
import "react-router";

export const app = express();

const reactRouterHandler = createRequestHandler({
  // Pulls the built module from Vite
  build: () => import("virtual:react-router/server-build"),
  getLoadContext() {
    // context values to pass through to React-Router
    return {
      VALUE_FROM_EXPRESS: "Hello from Express",
    };
  },
});


app.use(async (req, res, _next) => {
  try {
    try {
      await reactRouterHandler(req, res, _next);
    } catch (routerError) {
      throw routerError;
    }
  } catch (error) {
    throw error;
  }
});
