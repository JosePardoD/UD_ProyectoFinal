import express from "express";
import usuarioRouter from "./usuarioRouter.js";
import { login } from "../modules/authModule.js";

const apiRouter = express.Router();
apiRouter.get("/login", login);
apiRouter.use("/usuario", usuarioRouter);

export default apiRouter;
