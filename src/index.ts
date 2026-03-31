import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/user.routes';
import eventsRoutes from './routes/event.routes';



const app = express();
const port = process.env.PORT || 3000;

declare global {
    namespace Express {
        interface Request {
            test?: string;
        }
    }
}

app.use(express.json());

app.use('/api/events', eventsRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})