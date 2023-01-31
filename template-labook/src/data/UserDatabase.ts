import { user } from "../model/user/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    insertUser = async(user: user): Promise<void> =>{
        try{
            await UserDatabase.connection
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('labook_users')
        } catch(error:any){
            throw new Error(error.mensage);
        }
    }
}