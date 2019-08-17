import { Request, Response } from "express";
import db from "../db/db";
import bcrypt from "bcryptjs";

export const signUp = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    if (!salt) return res.status(400).json("error");

    const hashedPassword = await bcrypt.hash(password, salt);
    if (!hashedPassword) return res.status(400).json("error");

    const query = "INSERT INTO test (username, password, email) VALUES ($1, $2, $3);";
    const data = [username, hashedPassword, email];

    try {
        const ress = await db.query(query, data);
        return res.status(200).json("ok");
    } catch (error) {
        // 23505 UNIQUE VIOLATION
        if (error.code === 23505) {
            return res.json("email arleady exists")
        }
        return res.json("unknown error");
    }
}

export const signIn = async (req: Request, res: Response) => {
    console.log(req);
    return res.json("ok");
}