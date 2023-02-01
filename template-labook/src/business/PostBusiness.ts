import { PostDataBase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidAuthor, InvalidType, NotAuthor, NotDescription, NotPhoto, NotType } from "../error/PostError";
import { InvalidEmail, InvalidPassword, NotEmail, NotName, NotPassword } from "../error/UserError";
import { post } from "../model/post/post";
import { PostInputDTO } from "../model/post/postDTO";
import { user } from "../model/user/user";
import { UserInputDTO } from "../model/user/userDTO";
import { generateId } from "../service/idGenerator";

export class PostBusiness {
    createPost = async (input: PostInputDTO): Promise<void> =>{
        try{
            const { photo, description, type, author_id } = input

            if (!photo){
                throw new NotPhoto;
            }else if(!description){
                throw new NotDescription;
            }else if(!type){
                throw new NotType;
            }else if(type !== "normal" && type !== "event" && type !== "Normal" && type !== "Event" && type !== "NORMAL" && type !== "EVENT"){
                throw new InvalidType;
            }else if(!author_id){
                throw new NotAuthor;
            }

            console.log(author_id)
            const id = generateId()
            const post: post = {
                id,
                photo,
                description,
                type,
                author_id
            }

            const postDataBase = new PostDataBase()
            await postDataBase.insertPost(post)
        }catch(error: any){
            throw new CustomError(error.statusCode, error.message)
        }
    }
}