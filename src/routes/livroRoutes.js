import express from "express";
import LivroController from "../controllers/LivroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.resgatarLivroPorEditora);
routes.get("/livros/:id", LivroController.resgatarLivro);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizarLivro);

routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;