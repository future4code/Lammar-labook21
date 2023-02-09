import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { PostDataBase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { PostInputDTO } from "../model/post/postDTO";

export class PostController {
    createPost = async (req: Request, res: Response): Promise<void> =>{
        try {
            let message = "Success!"
            const input: PostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                author_id: req.body.author_id
            };

            const postBusiness = new PostBusiness()
            await postBusiness.createPost(input)
            res.status(201).send({message: "Post criado"});
      } catch(error: any){
        res.status(400).send(error.message || error.sqlMessage)
      }
    };

    public getPost = async (req:Request, res:Response)=>{
      try{
            const { id } = req.params
 
            const postDataBase = new PostDataBase()
            const post = await postDataBase.getPost(id)

            res.status(201).send(post[0])
      }catch(error:any){
        throw new CustomError(error.statusCode, error.message)
      }
    }
}