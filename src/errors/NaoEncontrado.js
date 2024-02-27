import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
    constructor(){
        super("Pagina nao encontrada", 404);
    }
}

export default NaoEncontrado;