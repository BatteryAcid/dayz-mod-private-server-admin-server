import { Request, Response, NextFunction } from 'express';
import { CharacterData } from "./characterData";
import { getManager } from "typeorm";
import logger from '../../util/logger';

export async function get(req: Request, res: Response, next: NextFunction) {
   const getRepository = getManager().getRepository(CharacterData);
   const characterData = await getRepository.find();
   logger.log(characterData);
   res.json(characterData);
}

export async function getAlive(req: Request, res: Response, next: NextFunction) {
   const getRepository = getManager().getRepository(CharacterData);
   const characterData = await getRepository.createQueryBuilder("characterData")
      .where("characterData.alive = :alive", { alive: 1 })
      .getMany();
   // logger.log(characterData);
   res.json(characterData);
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
