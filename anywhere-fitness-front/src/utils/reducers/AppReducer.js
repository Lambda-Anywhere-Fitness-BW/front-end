//global state
//?Ask JB about removing onboarding questions and just placing all inputs / fields onto sign-up page
const initialState = {
  user: {
    username: "",
    role: "",
    classes: [],
  },
  classes: [
    {
      id: "",
      name: "",
      type: null,
      start_time: "",
      duration: "",
      intensity_level: null,
      location: "",
      max_size: null,
    },
  ],
  punchpass: [
    {
      class_ID: "",
      ppName: "",
      number: null,
      reward: "",
    },
  ],
};

export const AppReducer = (state = initialState, action) => {
  console.log("STATE", state);
  switch (action.type) {
    case "CREATE_CLASS":
      console.log("inside the reducer bruuh");
      //the list of classes in state is copied, and then this class is added using the create a class form information.
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case "DELETE_CLASS":
      //!need to create delete action
      return {
        classes: state.classes.filter((classObject) => {
          return classObject.id !== action.payload.id;
        }),
      };
    case "ADD_CLASS":
      return {
        user: { ...state, classes: [...state, action.payload] },
      };
    case "REMOVE_CLASS":
      return {
        user: {
          ...state,
          classes: state.classes.filter((classObject) => {
            return classObject.id !== action.payload.id;
          }),
        },
      };
    case "CREATE_PUNCHPASS":
      //!need to map punchpass to attendees of a particular class
      return {
        punchpass: { ...state, punchpass: [...state, action.payload] },
      };
    case "GET_USER_INFO":
      return {
        user: { ...state, role: action.payload.roles[0].role.name },
      };
    default:
      return state;
  }
};

export default AppReducer;
