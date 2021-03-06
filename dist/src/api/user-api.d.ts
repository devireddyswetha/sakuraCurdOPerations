/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/api';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
export declare class UserApi extends {
    sapi?: SakuraApi;
    sapiConfig?: any;
} {
    sendUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    getUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateData(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteData(req: Request, res: Response, next: NextFunction): Promise<void>;
}
