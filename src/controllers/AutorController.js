import { autor } from "../models/Autor.js";

class AutorController{
    static async listarAutores(req, res){
        try{
            let autores = await autor.find({});

            res.status(200).json(autores);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async resgatarAutor(req, res){
        try{
            let autorGet = await autor.findById(req.params.id);

            res.status(200).json(autorGet);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso.", autor: novoAutor});
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async atualizarAutor(req, res){
        try{
            await autor.findByIdAndUpdate(req.params.id, req.body);
    
            res.status(200).json({message: "Autor atualizado."});
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});  
        }
    }

    static async deletarAutor(req, res){
        try{
            await autor.findByIdAndDelete(req.params.id);
    
            res.status(204);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});  
        }
    }
}

export default AutorController;