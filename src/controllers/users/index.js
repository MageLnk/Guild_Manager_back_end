// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
let users = [
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
  res.send(users);
};
export const getUser = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};
