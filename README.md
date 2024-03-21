# <p align="center"> Liber </p>

## Resumo
Projeto feito durante curso de Express e Node.js da Alura, tendo como objetivo criar um sistema de gerenciamento de uma livraria, contendo livros e autores.

## Tecnologias
- Node.js
- Express
- Mongoose

## Rotas
### Livros
POST - `/livros` - criar um novo livro no banco.

GET - `/livros` - pegar todos os livros do banco.

GET - `/livros/{id}` - resgatar algum livro do banco.

PUT - `/livros/{id}` - atualizar algum livro no banco.

DELETE - `/livros/{id}` - deleta algum livro do banco.

GET - `/livros/busca` - pegar livros por filtro.
Exemplo da classe acima: `/livros/busca?titulo=Exemplo`

### Autores
POST - `/autores` - criar um novo autor no banco.

GET - `/autores` - pegar todos os autores do banco.

GET - `/autores/{id}` - resgatar algum autor do banco.

PUT - `/autores/{id}` - atualizar algum autor no banco.

DELETE - `/autores/{id}` - deleta algum autor do banco.
