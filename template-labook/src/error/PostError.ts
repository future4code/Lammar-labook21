import { CustomError } from "./CustomError";

export class NotPhoto extends CustomError{
    constructor(){
        super(400, "Favor insira a url da imagem.")
    }
}
export class NotDescription extends CustomError{
    constructor(){
        super(400, "Favor inserir a descrição da imagem.")
    }
}
export class NotType extends CustomError{
    constructor(){
        super(400, "Favor inserir qual o tipo da imagem")
    }
}
export class InvalidType extends CustomError{
    constructor(){
        super(400, "Tipo inválido, favor inserir se o tipo da imagem é normal ou event")
    }
}
export class NotAuthor extends CustomError{
    constructor(){
        super(400, "Favor inserir a identificação do autor")
    }
}
export class InvalidAuthor extends CustomError{
    constructor(){
        super(400, "Autor não encontrado no banco de dados")
    }
}
