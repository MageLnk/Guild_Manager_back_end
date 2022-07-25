export const dummyUsers = [
  {
    secretData: {
      userName: "MageLink",
      password: "1234567",
      idUser: 1,
      admin: false,
      superAdmin: false,
    },
    publicData: {
      games: [
        { name: "Aion", idGame: 1, active: true },
        { name: "Black Desert", idGame: 2, active: true },
        { name: "Final Fantasy XIV", idGame: 3, active: true },
        { name: "Lineage II", idGame: 4, active: true },
        { name: "Lost Ark", idGame: 5, active: true },
        { name: "World of Warcraft", idGame: 6, active: false },
      ],
    },
  },
  {
    secretData: {
      userName: "MageLink",
      password: "1234",
      idUser: 2,
      admin: false,
      superAdmin: false,
    },
    publicData: {
      games: [
        { name: "Aion", idGame: 1, active: false },
        { name: "Black Desert", idGame: 2, active: true },
        { name: "Final Fantasy XIV", idGame: 3, active: false },
        { name: "Lineage II", idGame: 4, active: true },
        { name: "Lost Ark", idGame: 5, active: true },
        { name: "World of Warcraft", idGame: 6, active: true },
      ],
    },
  },
  {
    secretData: {
      userName: "Noxtror",
      password: "12345",
      idUser: 3,
      admin: false,
      superAdmin: false,
    },
    publicData: {
      games: [
        { name: "Aion", idGame: 1, active: false },
        { name: "Black Desert", idGame: 2, active: true },
        { name: "Final Fantasy XIV", idGame: 3, active: false },
        { name: "Lineage II", idGame: 4, active: false },
        { name: "Lost Ark", idGame: 5, active: false },
        { name: "World of Warcraft", idGame: 6, active: false },
      ],
    },
  },
  {
    secretData: {
      userName: "JuanitoBower",
      password: "123456789",
      idUser: 4,
      admin: false,
      superAdmin: false,
    },
    publicData: {
      games: [
        { name: "Aion", idGame: 1, active: true },
        { name: "Black Desert", idGame: 2, active: true },
        { name: "Final Fantasy XIV", idGame: 3, active: false },
        { name: "Lineage II", idGame: 4, active: true },
        { name: "Lost Ark", idGame: 5, active: true },
        { name: "World of Warcraft", idGame: 6, active: false },
      ],
    },
  },
];

export const dummyGames = [
  {
    gameInfo: {
      idGame: 1,
      gameName: "Aion",
    },
    Views: ["Profile", "Algo", "NotEmpty"],
  },
  {
    gameInfo: {
      idGame: 2,
      gameName: "Black Desert",
    },
    Views: ["Profile", "Puente"],
  },
  {
    gameInfo: {
      idGame: 3,
      gameName: "Final Fantasy XIV",
    },
    Views: ["Profile", "Algo", "Ilustrator", "Photoshop"],
  },
  {
    gameInfo: {
      idGame: 4,
      gameName: "Lineage II",
    },
    Views: ["Profile", "Gludio", "Giran", "Aden", "Oren"],
  },
  {
    gameInfo: {
      idGame: 5,
      gameName: "Lost Ark",
    },
    Views: [
      "Argos",
      "Vykas",
      "Valtan",
      "Members",
      "Brelshaza",
      "Managment",
      "Kakul-Saydon",
      "Contribution",
    ],
  },
  {
    gameInfo: {
      idGame: 6,
      gameName: "World of Warcraft",
    },
    Views: ["Profile", "Kratos", "Project Zomboid"],
  },
];
