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
}