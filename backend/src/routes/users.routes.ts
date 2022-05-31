import { Router } from "express";
import {createUser, getUsers} from '../controllers/user.controller'

const router = Router();

router.post('/register', createUser)

router.get('/register', getUsers)

export default router;