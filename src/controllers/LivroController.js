import { TopologyDescription } from "mongodb";
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController{
    static async listarLivros(req, res){
        try{
            let livros = await livro.find({});

            res.status(200).json(livros);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async resgatarLivro(req, res){
        try{
            let livroGet = await livro.findById(req.params.id);

            res.status(200).json(livroGet);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    }

    static async cadastrarLivro(req, res){
        try{
            const autorEncontrado = await autor.findById(req.body.autor);
            const livroCompleto = {...req.body, autor: {...autorEncontrado._doc}};

            const novoLivro = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso.", livro: novoLivro});
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async atualizarLivro(req, res){
        try{
            await livro.findByIdAndUpdate(req.params.id, req.body);
    
            res.status(200).json({message: "Livro atualizado."});
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});  
        }
    }

    static async deletarLivro(req, res){
        try{
            await livro.findByIdAndDelete(req.params.id);
    
            res.status(204);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});  
        }
    }

    static async resgatarLivroPorEditora(req, res){
        try{
            const livros = find({ editora: req.query.editora });
            
            res.status(200).json(livros);
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});  
        }
    }
}

export default LivroController;