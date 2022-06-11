import { Router } from "express";
import {createBudge, createUser, getUsers} from '../controllers/user.controller'

const router = Router();

router.post('/register', createUser)

router.get('/register', getUsers)

router.post('/budge', createBudge)

export default router;