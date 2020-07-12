
import { Request, Response } from 'express';

export const welcomeController = (_req: Request, res: Response) => {
    return res.send('Welcome to Flash Cards');
}

