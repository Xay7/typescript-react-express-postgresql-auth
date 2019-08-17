import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import auth from "./routes/auth";
import { resolve } from "path";
import passport from "passport";

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config({ path: resolve(__dirname, "../.env") })
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(auth);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
