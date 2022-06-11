import {Request, Response} from 'express'
import { User} from '../entities/User'
import { Budge } from '../entities/Budges'

export const createUser = async (req:Request, res:Response):Promise<void> => {

    const { email, password } = req.body;

    const user = new User()
    user.email = email
    user.password = password

    await user.save()

    console.log(user)
    res.json(user)
}

export const getUsers = async (req:Request, res:Response):Promise<Response> => {

    const users = await User.find()

    return res.json(users)
}

export const createBudge = async (req:Request, res:Response):Promise<void> => {
    const {amount, concept, type} = req.body;

    const budge = new Budge()
    budge.amount = amount
    budge.concept = concept
    budge.type = type

    await budge.save()

    console.log(budge)
    res.json(budge)
}