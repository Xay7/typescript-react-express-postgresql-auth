import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import db from "../db/db";
import bcrypt from "bcryptjs";

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
}, async (email: any, password: any, done: any) => {
    try {

        const query = "SELECT id, username, password FROM test WHERE email = $1";
        const data = [email];

        const { rows } = await db.query(query, data);

        if (rows.length === 0) {
            return done(null, false, { message: "User does not exists" });
        }

        const passwordMatch = await bcrypt.compare(password, rows[0].password);

        if (!passwordMatch) {
            return done(null, false, { message: "Wrong password" });
        }

        return done(null, rows[0]);
    } catch (err) {
        return done(err);
    }
}))