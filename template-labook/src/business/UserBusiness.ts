import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword, NotEmail, NotName, NotPassword } from "../error/UserError";
import { user } from "../model/user/user";
import { UserInputDTO } from "../model/user/userDTO";
import { generateId } from "../service/idGenerator";

export class UserBusiness {
    createUser = async (input: UserInputDTO): Promise<void> =>{
        try{
            const {name, email, password} = input;

            if (!name){
                throw new NotName;
            }else if(!email){
                throw new NotEmail;
            }else if(!password){
                throw new NotPassword;
            }else if(!email.includes("@")){
                throw new InvalidEmail
            }else if(password.length <=6){
                throw new InvalidPassword;
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
            throw new CustomError(error.statusCode, error.message)
        }
    }
}