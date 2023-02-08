const superagent = require("superagent");
const fs = require("fs");

// callbacks in a bad way!
// fs.readFile(`${__dirname}/dog.txt`, "utf8", (err, data) => {
//   console.log(data);
//   superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`).end((err, res) => {
//     if (err) return console.log(err);
//     console.log(res.body.message);

//     fs.writeFile("dog.img.txt", res.body.message, (err) => {
//       if (err) return console.log(err);
//       console.log("Dog image url saved succesfully");
//     });
//   });
// });

/* PROMISES */
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject("Error, file not found: err.msg - ", err);
      resolve(data);
    });
  });
};

const writeFilePro = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("newfile.txt", data, (err) => {
      if (err) reject("File not found: ", err);
      resolve("File saved succesfully");
    });
  });
};

// vi undgår nedenstående ved at bruge async await - async await kan dog kun bruges på funktioner der returnerer en promise
// readFilePro(`${__dirname}/dog.txt`).then((data) =>
//   superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .then((res) => writeFilePro(res.body.message))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Done."))
// );

/* ASYNC / AWAIT */
// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
//     const text = await writeFilePro(res.body.message);
//     console.log(text);
//   } catch (error) {
//     throw new Error(e);
//   }
// };

// iife - Immediately invoked function expression
// console.log("1");

// (async () => {
//   try {
//     const data = await getDogPic();
//     console.log("2");
//   } catch (error) {
//     console.log(error);
//   }
// })();
// console.log("3");

// getDogPic();

// Waiting for multiple promises
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);

    const all = await Promise.all([res1, res2, res3]);
    const images = all.map((el) => el.body.message);
    console.log(images);

    await writeFilePro(images.join("\n"));
  } catch (error) {
    throw new Error(error);
  }
};

getDogPic();
