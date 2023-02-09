import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { friendsInputDTO } from "../model/friends/friendsDTO";
import { UserInputDTO } from "../model/user/userDTO";

export class UserController {
    createUser = async (req: Request, res: Response): Promise<void> =>{
        try {
            let message = "Success!"
            const input: UserInputDTO = {
                 name: req.body.name,
                 email: req.body.email,
                 password: req.body.password,
            };

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({message: "Usuário criado"});
      } catch(error: any){
        res.status(400).send(error.message || error.sqlMessage)
      }
    };

    createFriend = async (req: Request, res: Response):Promise<void> =>{
      try{
        let message = "Success!"
        const input: friendsInputDTO ={
          friend1: req.body.friend1,
          friend2: req.body.friend2
        };

        const userBusiness = new UserBusiness()
        await userBusiness.createFriends(input)
        
        res.status(201).send({message: "Amizade criada com sucesso"});
      }catch(error:any){
        res.status(400).send(error.message || error.sqlMessage)
      }
    };
}