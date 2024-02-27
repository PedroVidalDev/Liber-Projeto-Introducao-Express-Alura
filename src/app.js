import express from "express";
import conn from "./config/databaseConn.js";
import routes from "./routes/index.js";

const conexao = await conn();

conexao.on("error", (erro) => {
    console.error(erro);
})

conexao.once("open", () => {
    console.log("conectou no banco menor")
})

const app = express();
routes(app);

export default app;