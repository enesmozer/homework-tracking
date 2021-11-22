const initialState: object = {
  users: {},
  error: null,
};
const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_REQUESTED":
      return { ...state, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, users: action.user };
    case "LOGIN_FAILED":
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default user;
