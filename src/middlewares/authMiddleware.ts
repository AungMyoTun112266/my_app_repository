import {NextFunction } from 'express';

export const authMiddleware = (next: NextFunction) => {
    next();
    // const token = req.headers['authorization'];
    // if (token) {
    //     // validate token
    //     next();
    // } else {
    //     // res.status(401).send('Unauthorized');
    //     next();
    // }
};
