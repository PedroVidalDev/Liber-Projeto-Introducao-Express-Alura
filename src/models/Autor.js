import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },

    nome: {
        type: String, 
        required: [true, "O nome do autor obrigatorio."]
    },

    nacionalidade: {
        type: String,
        validate: {
            validator: (valor) => {
                return valor == "Brasil";
            },
            message: "A nacionalidade do autor deve ser brasileira."
        }
    }
}, {versionKey: false})

const autor = mongoose.model("autores", autorSchema)

export {autor, autorSchema}