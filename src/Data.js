export const galleries = [
  {
    name: "Param",
    belongsTo: "themes",
    galleries: [
      {
        img: "img 1 param theme",
        personal: [{ firstname: "Param" }, { lastname: "Harrison" }],
      },
      {
        img: "img 2 param theme",
        employer: {
          name: "Jobbatical",
          city: "Tallinn, Estonia",
        },
      },
    ],
  },
  {
    name: "Miguel",
    belongsTo: "destinations",
    galleries: [
      {
        img: "img 1 miguel destination",
        content: {
          firstname: "Miguel",
          lastname: "Medina",
        },
      },
      {
        img: "img 2 miguel destination",
        content: {
          name: "Skype",
          city: "Arizona, US",
        },
      },
      {
        name: "other",
        content: {
          country: "Mexico",
          age: 30,
        },
      },
    ],
  },
];
