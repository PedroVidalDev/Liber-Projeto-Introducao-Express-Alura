import { autor } from "../models/Autor.js";
import { livro } from "../models/index.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

class LivroController{
    static async listarLivros(req, res, next){
        try{
            const livros = livro.find();
            
            req.resultado = livros;

            next();

        } catch(erro){
            next(erro);
        }
    }

    static async resgatarLivro(req, res, next){
        try{
            let livroGet = await livro.findById(req.params.id);

            res.status(200).json(livroGet);
        } catch(erro){
            next(erro);
        }
        
    }

    static async cadastrarLivro(req, res, next){
        try{
            const autorEncontrado = await autor.findById(req.body.autor);
            const livroCompleto = {...req.body, autor: {...autorEncontrado}};

            const novoLivro = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso.", livro: novoLivro});
        } catch(erro){
            next(erro);
        }
    }

    static async atualizarLivro(req, res, next){
        try{
            await livro.findByIdAndUpdate(req.params.id, req.body);
    
            res.status(200).json({message: "Livro atualizado."});
        } catch(erro){
            next(erro);
        }
    }

    static async deletarLivro(req, res, next){
        try{
            await livro.findByIdAndDelete(req.params.id);
    
            res.status(204);
        } catch(erro){
            next(erro);
        }
    }

    static async resgatarLivroPorFiltro(req, res, next){
        try{
            const {editora, titulo, nomeAutor} = req.query;

            let busca = {};

            if(editora) busca.editora = editora;
            if(titulo) busca.titulo = {$regex: titulo, $options: "i"};
            if(nomeAutor){
                const autorCompleto = await autor.findOne({ nome: nomeAutor });

                if(autorCompleto !== null){
                    busca.autor = autorCompleto._id;
                } else{
                    busca = null;
                }
            }

            if(busca !== null){
                const livros = livro.find(busca).populate("autor");

                req.resultado = livros;

                next();

            } else{
                res.status(200).send([]);
            }
        } catch(erro){
            next(erro);
        }
    }
}

export default LivroController;