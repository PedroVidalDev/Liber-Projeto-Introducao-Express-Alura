import express from "express";
import conn from "./config/databaseConn.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js"

const conexao = await conn();

conexao.on("error", (erro) => {
    console.error(erro);
})

conexao.once("open", () => {
    console.log("conectou no banco menor")
})

const app = express();
routes(app);

app.use(manipuladorDeErros);

export default app;