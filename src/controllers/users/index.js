// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
let dummyUsers = [
  {
    userName: "MageLink",
    password: "1234567",
    status: "admin",
    games: [
      { name: "Aion", active: false },
      { name: "Black Desert", active: true },
      { name: "Final Fantasy XIV", active: false },
      { name: "Lost Ark", active: true },
      { name: "World of Warcraft", active: true },
    ],
  },
  {
    userName: "MageLink",
    password: "1234",
    status: "admin",
    games: [
      { name: "Aion", active: false },
      { name: "Black Desert", active: true },
      { name: "Final Fantasy XIV", active: false },
      { name: "Lost Ark", active: true },
      { name: "World of Warcraft", active: true },
    ],
  },
  {
    userName: "Noxtror",
    password: "123456",
    status: "user",
    games: [
      { name: "Aion", active: true },
      { name: "Black Desert", active: true },
      { name: "Final Fantasy XIV", active: false },
      { name: "Lost Ark", active: true },
      { name: "World of Warcraft", active: false },
    ],
  },
];
// App
export const getAllGeneralUsers = (req, res) => {
  res.send(dummyUsers);
};
export const getUser = (req, res) => {
  console.log(req.body);
  const checkUsers = dummyUsers.find((check) => {
    return check.userName === req.body.userName && check.password === req.body.password;
  });

  if (checkUsers === undefined) {
    res.send("Hay un error con el match de usuario");
    return;
  }
  res.send("Todo ok, en un futuro enviaré el usuario que haga match con el logIn");
};
