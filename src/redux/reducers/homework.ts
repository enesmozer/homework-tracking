const initialState: object = {
  homeworks: {},
  error: null,
};
const homeworks = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_HOMEWORKS_REQUESTED":
      return { ...state, error: null };
    case "GET_HOMEWORKS_SUCCESS":
      return { ...state, homeworks: action.homeworks };
    case "GET_HOMEWORKS_FAILED":
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default homeworks;
