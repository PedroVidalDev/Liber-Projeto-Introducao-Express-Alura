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

app.use((erro, req, res, next) => {
    if(erro instanceof mongoose.Error.CastError){
        res.status(400).json({message: "Dados fornecidos incorretos."});
    } else{
        res.status(500).json({message: `${erro.message}`});
    }
});

export default app;