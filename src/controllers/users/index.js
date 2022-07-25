// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
import { dummyGames, dummyUsers } from "../../dummyData/dummyData.js";
// App
export const getAllGeneralUsers = (req, res) => {
  res.send(dummyUsers);
};
// Log In
export const getUser = (req, res) => {
  const checkUser = dummyUsers.find((check) => {
    return (
      check.secretData.userName === req.body.userName &&
      check.secretData.password === req.body.password
    );
  });
  if (checkUser === undefined) {
    res.status(406).send({
      msg: "Hay un problema con el usuario y contraseña",
      loginStatus: false,
    });
    return;
  }
  res.status(200).send({
    msg: "Todo ok",
    loginStatus: true,
    userId: checkUser.secretData.idUser,
  });
};
// Active Games
export const activeGames = (req, res) => {
  const returnActivesGames = dummyUsers.find((check) => {
    // El + es temporal, igual que los ID, mientras fabrico la verdadera DB
    return +req.body.idUser === check.secretData.idUser;
  });
  if (returnActivesGames === undefined) {
    res.status(406).send({ msg: "El id del usuario no corresponde" });
    return;
  }
  res.status(200).send({ msg: "Todo ok", data: returnActivesGames.publicData.games });
};
