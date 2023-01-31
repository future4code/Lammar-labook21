import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError{
    constructor(){
        super(400, "Formato de email não é válido..")
    }
}
export class NotEmail extends CustomError{
    constructor(){
        super(400, "Favor inserir o e-mail.")
    }
}
export class InvalidPassword extends CustomError{
    constructor(){
        super(400, "Senha Inválida, requisito minimo: 6 caracteres.")
    }
}
export class NotPassword extends CustomError{
    constructor(){
        super(400, "Favor inserir a senha.")
    }
}
export class NotName extends CustomError{
    constructor(){
        super(400, "Favor inserir o nome.")
    }
}
export class UserNotFound extends CustomError{
    constructor(){
        super(404, "Usuário não encontrado.")
    }
}