import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },

    titulo: {
        type: mongoose.Schema.Types.String, 
        required: [true, "Titulo obrigatorio."]
    },

    editora: {
        type: mongoose.Schema.Types.String, 
        enum: {values:
            ["Casa do Codigo", "Alura"], 
            message: "Editora {VALUE} invalida."
        }
    },

    anoLancamento: {
        type: mongoose.Schema.Types.Number
    },

    autor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "autores", 
        required: [true, "Autor obrigatorio"]}
    },
    {versionKey: false}
)

const livro = mongoose.model("livros", livroSchema);

export default livro;