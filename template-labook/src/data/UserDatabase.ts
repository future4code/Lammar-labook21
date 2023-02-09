import { CustomError } from "../error/CustomError";
import { friends } from "../model/friends/friends";
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
            throw new CustomError(error.statusCode, error.message)
        }
    }

    insertFriends = async(friends:friends):Promise<void> =>{
        try{
            await UserDatabase.connection
            .insert({
                id: friends.id,
                friend1: friends.friend1,
                friend2: friends.friend2
            }).into('labook_friends')
            
        }catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}