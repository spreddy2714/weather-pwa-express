import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response } from 'express'

const app = express();

dotenv.config();

app.use(express.json({ limit: "10mb", inflate: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to weather api!!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});

export default app;