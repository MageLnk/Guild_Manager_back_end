const express = require("express");
const { Router } = express;
const router = new Router();
// Variables
const temporalUsers = [{ username: "MageLink", password: "Olakase" }];

router.get("/login", (req, res) => {
  //Some practice validations
  const isBodyEmpty = Object.keys(req.body).length === 0;
  if (isBodyEmpty === true) {
    res.status(400).json({ loggedIn: false, status: "No ha ingresado nada" });
  }
  const { username, password } = req.body;
  if (!username) {
    //const isUsernameEmpty = Object.keys(username).length === 0;
    //console.log(isUsernameEmpty);
    res.status(400).json({ loggedIn: false, status: "Falta el usuario" });
  }
  if (!password) {
    //const isPasswordEmpty = Object.keys(password).length === 0;
    res.status(400).json({ loggedIn: false, status: "Falta la contraseña" });
  }
  // Checking practice users
  const checkUser = temporalUsers.find(
    (e) => e.username === username && e.password === password
  );
  if (checkUser === undefined) {
    res.json({ loggedIn: false, status: "Los datos no coinciden" });
  } else {
    res.json({ loggedIn: true, status: "All good" });
  }
});

router.get("/users", (req, res) => {
  res.json(temporalUsers);
});

module.exports = router;
