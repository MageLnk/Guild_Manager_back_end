// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
import { dummyUsers } from "../../dummyData/dummyData.js";
// App
export const getAllGeneralUsers = (req, res) => {
  res.send(dummyUsers);
};
export const getUser = (req, res) => {
  const checkUser = dummyUsers.find((check) => {
    return (
      check.secretData.userName === req.body.userName &&
      check.secretData.password === req.body.password
    );
  });
  if (checkUser === undefined) {
    res
      .status(406)
      .send({ msg: "Hay un problema con el usuario y contraseña", loginStatus: false });
    return;
  }
  res.status(200).send({
    msg: "Todo ok, en un futuro enviaré el usuario que haga match con el logIn",
    loginStatus: true,
    gamesInfo: checkUser.publicData,
  });
};
