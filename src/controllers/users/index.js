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
    msg: "Todo ok, en un futuro enviaré el usuario que haga match con el logIn",
    loginStatus: true,
    userId: checkUser.secretData.id,
  });
};
// Active Games
export const activeGames = (req, res) => {
  const checkGames = dummyGames.find((check) => {
    // El + es temporal, igual que los ID, mientras fabrico la verdadera DB
    return +req.body.gameId === check.gameInfo.idGame;
  });
  if (checkGames === undefined) {
    res.status(406).send({ msg: "El id del juego no corresponde" });
    return;
  }
  res.status(200).send({ msg: "Todo ok", data: checkGames });
};

/*
Con el ID del usuario, traigo los juegos activos y su respectivo ID para guardarlos en Front
Cuando seleccione algún juego, 
*/
