const initialState = {
  mainInfo: {
    photo: "dasdasd",
    name: "Paweł",
    surname: "Miłczak",
    job: "Frontend developer"
  },
  contacts: [
    { id: 1, type: "phone", body: "+48 797 792 613" },
    { id: 2, type: "email", body: "jogobello4@gmail.com" },
    { id: 3, type: "home", body: "www.pawelmilczak.com" }
  ],
  educations: [
    {
      id: 1,
      degree: "Technik informatyk",
      academy: "Zespół szkół nr 1 im. Władysława Grabskiego w Lublinie",
      years: [2014, 2018]
    },
    {
      id: 2,
      degree: "Technik informatyk",
      academy: "Wyzsza Szkoła Ekonomii i Innowacji w Lublinie",
      years: [2014, 2018]
    }
  ],
  skills: [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "React.js" },
    { id: 5, name: "Express.js" },
    { id: 6, name: "MongoDB" }
  ],
  aboutMe:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  experiences: [
    {
      id: 1,
      position: "własnna działalność gospodarcza",
      company: "Własna działalność gospodarcza",
      city: "Lublin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      position: "własnna działalność gospodarcza",
      company: "Własna działalność gospodarcza",
      city: "Lublin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MAIN_INFO":
      return {
        ...state,
        mainInfo: action.payload
      };
    case "ADD_CONTACTS":
      console.log(action.payload);
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
