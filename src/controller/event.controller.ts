import type {createEventDTO, updateEventDTO} from "../models/event.models";
import {AppError} from "../utils/errors";

import type { Request, Response } from "express";
import {prisma} from "../lib/prisma";

export const findEventById = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        if (id !== undefined && typeof id === "string") {
            const event = await prisma.event.findUnique({
                where : {
                    id : parseInt(id)
                }
            })
            res.status(200).json(event)
        }
        console.log('je ne suis pqs entre dans le if')
    }
    catch (e) {
        console.log('catch')
        const appError: AppError = new AppError('Not Found', 404, "Not Found");
        throw(appError)
    }
}

export const findEvent = async (req: Request, res: Response) => {
    try {
       // recupere les events
    } catch (e)
    {
        // const appError :AppError = { message : e.e.z.message, method: eventController.findEvent, date: new Date()}
        // throw(appError)
    }
    const event = await prisma.event.findMany()
    console.log(event);
    res.status(200).json(event)
}

export const createEvent = async (req: Request, res: Response) => {
    const {title, description, nbPlace, billPrice, category, place, city, coverImage, dateAndHour} : createEventDTO = req.body

    if (description !== undefined && description) {
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
                dateAndHour : new Date()
            }
        });
        if (event) {
            console.log(JSON.stringify(event));
            return res.status(201).json({"message": "Créé avec succès"});
        }
        res.status(500).json({"message": "Erreur de création"});
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    const id = req.params.id;
    const eventToUpdate  = req.body

    if (id !== undefined && typeof id === "string" ) {
        const event = await prisma.event.update({
            where : { id : parseInt(id)},
            data : {
                // title : title,
                // description : description,
                // nbPlace : nbPlace,
                // billPrice : billPrice,
                // category : category,
                // place : place,
                // city : city,
                // coverImage : coverImage,
                // dateAndHour : new Date()
                ...eventToUpdate
            }
        })
        res.status(200).json(event)
    }
    res.status(500).json({"message": "Erreur de update"});
}

export const deleteEvent = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (id !== undefined && typeof id === "string") {
        const event = await prisma.event.delete({
            where: {id: parseInt(id)},
        })
        console.log('status')
        res.status(204).json(`${event} deleted`)
    }
    console.log('noIf')
    res.status(404).json({"message": "No such event"});
}

export const deleteManyEvents = async (req: Request, res: Response) => {
    const id = req.body

    const event = await prisma.event.deleteMany({
        where : {id: parseInt(id)},
    })
}










