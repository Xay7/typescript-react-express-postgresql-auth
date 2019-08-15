import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import auth from "./routes/auth";
import { resolve } from "path"

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config({ path: resolve(__dirname, "../.env") })
app.use(bodyParser.json());
app.use(morgan("dev"));

// Routes
app.use(auth);

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
