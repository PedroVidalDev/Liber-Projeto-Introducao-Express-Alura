import mongoose from "mongoose";
import ErroBase from "../errors/ErroBase.js";

function manipuladorDeErros(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        res.status(400).json({message: "Dados fornecidos incorretos."});
    } 
    
    else if(erro instanceof mongoose.Error.ValidationError){
        const mensagemErro = Object.values(erro.errors).map(erro => erro.message).join("; ");

        res.status(400).json({message: "Dados enviados de forma incorreta. Erros: " + mensagemErro});
    }
    
    else{
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;