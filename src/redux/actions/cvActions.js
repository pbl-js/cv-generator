export const addMainInfo = mainInfo => {
  return {
    type: "ADD_MAIN_INFO",
    payload: mainInfo
  };
};

export const addContacts = contacts => {
  return {
    type: "ADD_CONTACTS",
    payload: contacts
  };
};
