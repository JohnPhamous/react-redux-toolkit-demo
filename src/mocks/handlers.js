import { rest } from "msw";
import recipesData from "./recipes.json";

export const handlers = [
  rest.get("/api/recipes", (req, res, ctx) => {
    const limit =
      parseInt(req.url.searchParams.get("limit"), 10) || recipesData.length;

    return res(ctx.status(200), ctx.json(recipesData.slice(0, limit)));
  }),
];
