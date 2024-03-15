import express from "express";
import AutorController from "../controllers/AutorController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores, paginar);
routes.get("/autores/:id", AutorController.resgatarAutor);

routes.post("/autores", AutorController.cadastrarAutor);

routes.put("/autores/:id", AutorController.atualizarAutor);

routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;