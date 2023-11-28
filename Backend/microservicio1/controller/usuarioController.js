import usuarioModel from "../model/usuarioModel.js";

export async function crearUsuario(req, res) {
  try {
    const usuario = req.body;
    console.log(usuario);
    document = await usuarioModel.create(usuario);

    res.status(201).json(document);
  } catch (error) {
    res.status(400);
  }
}
