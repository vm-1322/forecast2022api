import { Request, Response, NextFunction } from 'express';

export const getMatches = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ Messege: 'getMatches' });
};

export const getTeams = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ Messege: 'getTeams' });
};
