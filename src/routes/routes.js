export const routes = {
  home: "/",
  personData: "/person-data",
  education: "/education",
  experience: "/experience",
  template: "/template",
  generateCv: "/download"
};

export const creatorRoutes = [
  { name: "Dane Osobowe", url: routes.personData },
  { name: "Edukacja", url: routes.education },
  { name: "Doświadczenie", url: routes.experience },
  { name: "Szablon", url: routes.template },
  { name: "Pobierz", url: routes.generateCv }
];
