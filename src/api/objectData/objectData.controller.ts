import { Request, Response, NextFunction } from 'express';
import { ObjectData } from "./objectData";
import { getManager } from "typeorm";
import logger from '../../util/logger';

export async function get(req: Request, res: Response, next: NextFunction) {
   const getRepository = getManager().getRepository(ObjectData);
   const objectData = await getRepository.find();
   //  logger.log(objectData);
   res.json(objectData);
}

export async function getById(req: Request, res: Response, next: NextFunction) {
   res.json({ ok: true });
}

export async function post(req: Request, res: Response, next: NextFunction) {
   res.json({ ok: true });
}

export async function put(req: Request, res: Response, next: NextFunction) {
   res.json({ ok: true });
}

export async function remove(req: Request, res: Response, next: NextFunction) {
   res.json({ ok: true });
}
