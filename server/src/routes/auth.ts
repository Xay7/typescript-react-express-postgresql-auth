import { Router } from "express";
import { signUp, login } from "../controllers/auth";
import { validateBody, schemas } from "../middlewares/validateBody";

const router = Router();

router.post('/signup', validateBody(schemas.signUp), signUp)

router.post('/login', validateBody(schemas.signIn), login);

export default router;