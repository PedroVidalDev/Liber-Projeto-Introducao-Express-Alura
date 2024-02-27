import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
    constructor(){
        super("Um ou mais dados fornecidos estao incorretos", 400);
    }
}

export default RequisicaoIncorreta;