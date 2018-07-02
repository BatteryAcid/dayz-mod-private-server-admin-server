import { Request, Response, NextFunction } from 'express';
import {Player} from "./player";
import {getManager} from "typeorm";    
import logger from '../../util/logger';

export async function get(req: Request, res: Response, next: NextFunction) {
    const getRepository = getManager().getRepository(Player);
    const players =  await getRepository.find();
    logger.log(players);
    res.json(players);
}

export async function getById(req: Request, res: Response, next: NextFunction) {
    res.json({ok: true});
}

export async function post(req: Request, res: Response, next: NextFunction) {
    res.json({ok: true});
}

export async function put(req: Request, res: Response, next: NextFunction) {
    res.json({ok: true});
}

export async function remove(req: Request, res: Response, next: NextFunction) {
    res.json({ok: true});
}
