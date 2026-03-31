import type { Request, Response } from "express";

import {prisma} from "../lib/prisma";

export const findUserById = async (req: Request, res: Response) => {
    const id = req.params.id;

    if(id && id !== undefined && typeof id === "string") {
        const userId = parseInt(id as string);
        const user = await prisma.user.findUnique({
            where : {
                id : userId
            }
        })
    }
}

export const createUser = async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data : req.body
    })
}