import Joi, { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

export const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json("err");
        }
        next();
    }
}

export const schemas = {
    signUp: Joi.object().keys({
        username: Joi.string().required().min(3),
        password: Joi.string().required().min(6),
        email: Joi.string().required().email()
    }),
    signIn: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
    })
}


