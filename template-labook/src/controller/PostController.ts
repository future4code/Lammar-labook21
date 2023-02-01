import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { UserBusiness } from "../business/UserBusiness";
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
}