import { PostDataBase } from "../data/PostDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
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
                throw new Error("Insira uma imagem");
            }else if(!description){
                throw new Error("Insira uma descrição");
            }else if(!type){
                throw new Error("Insira umm tipo válido");
            }else if(!author_id){
                throw new Error("Insira uma autor");

            }
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