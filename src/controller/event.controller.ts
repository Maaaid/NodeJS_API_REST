import type {createEventDTO, updateEventDTO} from "../models/event.models";

import type { Request, Response } from "express";
import {prisma} from "../lib/prisma";

export const findEventById = async (req: Request, res: Response) => {
    const id = req.params.id
    if (id !== undefined && typeof id === "string") {
        const event = await prisma.event.findUnique({
            where : {
                id : parseInt(id)
            }
        })
    }
}

export const findEvent = async () => {
    const event = await prisma.event.findMany()
    return event;
}

export const createEvent = async (req: Request, res: Response) => {
    const {title, description, nbPlace, billPrice, category, place, city, coverImage, dateAndHours} : createEventDTO = req.body

    if (description !== undefined && description !== null && dateAndHours !== undefined && dateAndHours !== null) {
        const event = await prisma.event.create({
            data : {
                title : title,
                description : description,
                nbPlace : nbPlace,
                billPrice : billPrice,
                category : category,
                place : place,
                city : city,
                coverImage : coverImage,
                dateAndHour : dateAndHours,
            }
        });
        if (event) {
            return res.status(201).json({"message": "Créé avec succès"});
        }
        res.status(500).json({"message": "Erreur de création"});
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    const id = req.params.id;
    const {title, description, nbPlace, billPrice, category, place, city, coverImage, dateAndHours} : updateEventDTO = req.body

    if (id !== undefined && typeof id === "string" && description !== undefined && dateAndHours !== undefined && dateAndHours !== null) {
        const event = await prisma.event.update({
            where : { id : parseInt(id)},
            data : {
                title : title,
                description : description,
                nbPlace : nbPlace,
                billPrice : billPrice,
                category : category,
                place : place,
                city : city,
                coverImage : coverImage,
                dateAndHour : dateAndHours,
            }
        })
    }
}

export const deleteEvent = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (id !== undefined && typeof id === "string") {
        const event = await prisma.event.delete({
            where: {id: parseInt(id)},
        })
    }
}

export const deleteManyEvents = async (req: Request, res: Response) => {
    const id = req.body

    const event = await prisma.event.deleteMany({
        where : {id: parseInt(id)},
    })
}










