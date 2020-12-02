import { rest } from "msw";
import recipesData from "./recipes.json";

export const handlers = [
  rest.get("/api/recipes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(recipesData));
  }),
];
