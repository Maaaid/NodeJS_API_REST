import express from 'express';
import type { NextFunction } from "express";
import 'dotenv/config';
import userRoutes from './routes/user.routes';
import eventsRoutes from './routes/event.routes';
import errorHandler from './middleware/error.middleware'



const app = express();
const port = process.env.PORT || 3000;

// declare global {
//     namespace Express {
//         interface Request {
//             Variable à faire valoir globalement dans l'application, comme le JWT par exemple?: string;
//         }
//     }
// }

app.use(express.json());

app.use('/api/events', eventsRoutes);
app.use('/api/users', userRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: NextFunction) => {
    console.log('je suis dans le middleware global!!!')
    // log dans un ficheri appError : aui contient l'originer de lerreur la date , le message d'erreur intitial ...
    // fs : file system module natif nodejs
    console.error(err.stack);
    res.status(500).json({"message": "Internal Server Error"});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})