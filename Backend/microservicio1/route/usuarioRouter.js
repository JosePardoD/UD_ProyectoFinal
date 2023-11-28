import express from "express";
import { crearUsuario } from "../controller/usuarioController";

const usuarioRouter = express.Router();

usuarioRouter.post("/", crearUsuario);


export default usuarioRouter;
