import express from "express";
import type { Request, Response, NextFunction } from "express";

const errorHandler = (err : Error, req: Request, res: Response, next: NextFunction) => {
    if(res.headersSent) {
        return next(err)
    }
    res.status(500).json({error: "Server error occured"})
}

export default errorHandler;