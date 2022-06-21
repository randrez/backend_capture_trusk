import { Request, Response } from 'express';
import { UserRepositoryImpl } from '../repositories/user/UserRepositoryImpl';

const repository: UserRepositoryImpl = new UserRepositoryImpl()
export default class UserController {

    public static all(_req: Request, _res: Response){
        repository.getAll().then((response) => {
            return _res.send(response)
        }).catch((error) => {
            return _res.send(error)
        })
    }

    public static getUserByEmail(_req: Request,_res: Response){
        const { email } = _req.body
        repository.getUserByEmail(email).then((response) =>{
            return _res.send(response)
        }).catch((error) => {
            return _res.send(error)
        })
    }
}