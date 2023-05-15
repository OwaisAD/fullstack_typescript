import * as dotenv from "dotenv";
import * as http from "http";
import fs from "fs";
import url from "url";
import logger from "./utility/logger";

dotenv.config({ path: "../.env" });

console.log(process.env.PORT);

// part1

const server = http.createServer((req, res) => {
  const { query, pathname, path, href, search } = url.parse(req.url!, true);
  const data = fs.readFileSync(`${__dirname}/../data.json`, "utf-8");

  // set response header
  res.writeHead(200, { "Content-type": "text/html" });
  console.log(pathname);
  if (pathname === "/") {
    fs.readFile(`${__dirname}/public/homepage.html`, "utf-8", (err, data) => {
      // console.log(data);
      res.end(data);
    });
  } else if (pathname === "/about") {
    fs.readFile(`${__dirname}/public/about.html`, "utf-8", (err, data) => {
      // console.log(data);
      res.end(data);
    });
  } else if (pathname === "/logger") {
  } else if (pathname === "/data") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else if (pathname === "/date") {
    res.writeHead(200, { "Content-type": "text/html" });
    console.log(query);
    res.end(`Date ${query.year}/${query.month}/${query.day}`);
  } else {
    res.writeHead(400, { "Content-type": "text/html" });
    res.end(`${pathname} does not exist`);
  }
});

server.listen(
  {
    host: process.env.HOSTNAME,
    port: process.env.PORT,
  },
  () => {
    // console.log(`Server is listening to http://localhost:${process.env.PORT}`);
    logger.info(`Server is listening to http://localhost:${process.env.PORT}`);
  }
);
