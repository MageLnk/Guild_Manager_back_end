// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
let users = [
  {
    userName: "MageLink",
    password: "1234",
  },
];
// App
export const getUsers = (req, res) => {
  res.send(users);
};
