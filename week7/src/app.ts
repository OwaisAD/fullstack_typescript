import express = require("express");
import morgan = require("morgan");
import fs from "fs";

const app = express();
// console.log(process.env);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode.");
}

app.use(express.json()); // Body parser for json data only for post
app.use(express.static(`${__dirname}/public`)); // to use and display static files such as html
// gør at siden http://localhost:3001/homepage.html findes

app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});

app.use((req, res, next) => {
  //@ts-ignore
  req.requestTime = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  //@ts-ignore
  const date = req.requestTime;

  res.status(200).json({
    status: "success",
    message: date,
  });
});

// part 2 hello world with params
app.get("/hello/:name", (req, res) => {
  res.status(200).json({
    status: "success",
    message: `Hello ${req.params.name}`,
  });
});

// part 3 Hello world with query
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: "success",
    message: `Hello ${req.query.name || "World"}`,
  });
});

// part 4 error handling
app.get("/error", (req, res) => {
  try {
    throw new Error("Something went wrong..!!");
    // res.status(200).json({
    //   status: "success",
    //   message: "Hello World!",
    // });
  } catch (error: any) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
});

// part 5 json data
app.get("/data", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
  res
    .status(200)
    .header({
      "Content-type": "application/json",
      "Content-length": data.length,
    })
    .json({
      status: "success",
      data: JSON.parse(data),
    });
});

// part 6 post json data
app.post("/", (req, res) => {
  const jsonData = req.body;

  console.log("Received data: ", jsonData);

  res.status(201).json({
    status: "success",
    data: jsonData,
  });
});

app.listen(3001, () => {
  console.log(`Server is listening to http://localhost:3001`);
});
