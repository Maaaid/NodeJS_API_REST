import { Router } from "express";
import {createUser, findUserById} from "../controller/user.controller";

const router = Router();

router.get('/', findUserById);

router.post("/", createUser);

export default router;