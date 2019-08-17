import Joi, { Schema } from "joi";
import { NextFunction, Request, Response } from "express";

export const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = Joi.validate(req.body, schema);
        if (result.error) {
            return res.status(400).json(result);
        }
        next();
    }
}

export const schemas = {
    signUp: Joi.object().keys({
        username: Joi.string().required().min(3).error(() => "Invalid username"),
        password: Joi.string().required().min(6).error(() => "Invalid password"),
        email: Joi.string().required().email().error(() => "Invalid email"),
    }),
    signIn: Joi.object().keys({
        email: Joi.string().required().email().error(() => "Invalid email"),
        password: Joi.string().required().min(6).error(() => "Invalid password"),
    })
}


