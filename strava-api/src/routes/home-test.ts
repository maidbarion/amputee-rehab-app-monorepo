import * as express from 'express';
import {Request, Response} from "express";
const router = express.Router();

router.get('/', (req: Request, res: Response) =>{
    res.send("Welcome to strava auth. Append /strava/auth at the end of this url.");
});

export { router as homeRouter };