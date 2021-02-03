export const CREATE_CLASS = "CREATE_CLASS";
export const DELETE_CLASS = "DELETE_CLASS";
export const ADD_CLASS = "ADD_CLASS";
export const REMOVE_CLASS = "REMOVE_CLASS";
export const CREATE_PUNCHPASS = "CREATE_PUNCHPASS";

//action creators returning action objects
export const createClass = (classObject) => {
  return { type: CREATE_CLASS, payload: classObject };
};

export const deleteClass = (classObject) => {
  return { type: DELETE_CLASS, payload: classObject };
};

export const addClass = (classObject) => {
  return { type: ADD_CLASS, payload: classObject };
};

export const removeClass = (classObject) => {
  return { type: REMOVE_CLASS, payload: classObject };
};

export const createPunchpass = (punchpass) => {
  return { type: CREATE_PUNCHPASS, payload: punchpass };
};
