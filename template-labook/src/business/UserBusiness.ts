import { UserDatabase } from "../data/UserDatabase";
import { user } from "../model/user/user";
import { UserInputDTO } from "../model/user/userDTO";
import { generateId } from "../service/idGenerator";

export class UserBusiness {
    createUser = async (input: UserInputDTO): Promise<void> =>{
        try{
            const {name, email, password} = input;

            if (!name){
                throw new Error("Preencha o nome do usuário");
            }else if(!email){
                throw new Error("Preencha o email do usuário");
            }else if(!password){
                throw new Error("Preencha a senha do usuário");
            }else if(!email.includes("@")){
                throw new Error("Formato de email não é válido.");
            }else if(password.length <=6){
                throw new Error("Senha precisa ter no mínimo 6 caracteres");
            }

            const id = generateId()
            const user: user = {
                id,
                name,
                email,
                password
            }

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(user);
        }catch(error: any){
            throw new Error(error.message)
        }
    }
}