import { Router } from "express";
import { findEvent, createEvent, findEventById, deleteEvent, deleteManyEvents, updateEvent } from "../controller/event.controller";

const router = Router();

router.get('/', findEvent);

router.get("/:id", findEventById)

router.post("/", createEvent)

router.put("/:id", updateEvent)

router.delete("/:id", deleteEvent)

router.delete("/:id", deleteManyEvents)

export default router;