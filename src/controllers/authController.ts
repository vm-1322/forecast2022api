import { Request, Response, NextFunction } from 'express';

export const login = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ Messege: 'login' });
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ Messege: 'register' });
};

export const reset = (req: Request, res: Response, next: NextFunction) => {
  res.status(201).send({ Messege: 'reset' });
};
