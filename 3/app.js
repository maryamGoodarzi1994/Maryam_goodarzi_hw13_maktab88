const express = require("express");
const app = express();
const { readFile } = require("fs");
const { resolve } = require("path");

const readUserData = () => {
  return new Promise((resolve, reject) => {
    readFile("./user-data.json", (err, data) => {
      if (!!err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
};
app.get("/get-all-users", (_req, res) => {
  readUserData()
    .then((userList) => res.send(userList))
    .catch((err) => res.send(err));
});
app.get("/admins", (_req, res) => {
  readUserData()
    .then((users) => {
      const admins = users.filter((user) => user.role === "admin");
      res.send(admins);
    })
    .catch((err) => res.send(err));
});
app.listen(4500, () => {
  console.log("express is up!");
});
