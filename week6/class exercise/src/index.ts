import * as dotenv from "dotenv";
import * as log4js from "log4js";
import express from "express";
import morgan from "morgan";
import { peopleRouter } from "./controllers/people";
const config = require("../log4js.json");

dotenv.config();

log4js.configure(config);

const logger = log4js.getLogger();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode.");
}

app.use(express.json()); // Body parser for json data only for post
app.use(express.static(`${__dirname}/public`)); // to use and display static files such as html
// gør at siden http://localhost:3001/homepage.html findes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/people", peopleRouter);

app.listen(process.env.PORT, () => {
  logger.info("Server is listening on port", process.env.PORT);
});
