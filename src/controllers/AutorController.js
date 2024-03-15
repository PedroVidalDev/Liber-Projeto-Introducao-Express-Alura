import mongoose from "mongoose";
import { autor } from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

class AutorController{
    static async listarAutores(req, res, next){
        try{
            let autores = autor.find({});

            req.resultado = autores;

            next();
        
        } catch(erro){
            next(erro);
        }
    }

    static async resgatarAutor(req, res, next){
        try{
            let autorGet = await autor.findById(req.params.id);

            if(autorGet === null){
                res.status(400).json({message: "Id do autor nao encontrado."});
            } else{
                res.status(200).json(autorGet);
            }
            
        } catch(erro){
            next(new NaoEncontrado("ID do autor nao localizado."));
        }
        
    }

    static async cadastrarAutor(req, res, next){
        try{
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso.", autor: novoAutor});
        } catch(erro){
            next(erro);
        }
    }

    static async atualizarAutor(req, res, next){
        try{
            await autor.findByIdAndUpdate(req.params.id, req.body);
    
            res.status(200).json({message: "Autor atualizado."});
        } catch(erro){
            next(erro);
        }
    }

    static async deletarAutor(req, res, next){
        try{
            await autor.findByIdAndDelete(req.params.id);
    
            res.status(204);
        } catch(erro){
            next(erro);
        }
    }
}

export default AutorController;