// Operators
//import { v4 as uuidv4 } from "uuid";
// Variables
let users = [
  {
    firstName: "Jhon",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];
// App
export const getUsers = (req, res) => {
  res.send(users);
};
