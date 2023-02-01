import { CustomError } from "../error/CustomError";
import { post } from "../model/post/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDataBase extends BaseDatabase{
    insertPost = async(post: post): Promise<void> =>{
        try{
            await PostDataBase.connection
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.author_id
            }).into('labook_posts')
        } catch(error:any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}