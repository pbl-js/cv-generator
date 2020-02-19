export const routes = {
  home: "/",
  app: "/app",
  personData: "/app/person-data",
  education: "/app/education",
  experience: "/app/experience",
  template: "/app/template",
  generateCv: "/app/download"
};
// routerError
export const creatorRoutes = [
  { name: "Dane Osobowe", url: routes.personData },
  { name: "Edukacja", url: routes.education },
  { name: "Doświadczenie", url: routes.experience },
  { name: "Szablon", url: routes.template },
  { name: "Pobierz", url: routes.generateCv }
];
