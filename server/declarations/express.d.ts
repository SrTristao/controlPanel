/* tslint:disable */
import * as express from 'express';
import { IUser } from '../interfaces/IUser';

declare module 'express' {
  interface Request {
    user?: IUser;
  }
}
