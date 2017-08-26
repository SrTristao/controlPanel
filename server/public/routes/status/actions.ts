import { NextFunction, Request, Response }  from 'express';

export async function statusServer(req: Request, res: Response, next: NextFunction) : Promise<void> {
    try {
        res.status(200).send('Server OK');
    } catch (err) {
        next(err);
    }
}
