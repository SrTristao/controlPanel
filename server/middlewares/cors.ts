import { NextFunction, Request, Response } from 'express';

export async function cors(req: Request, res: Response, next: NextFunction): Promise<void> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
}