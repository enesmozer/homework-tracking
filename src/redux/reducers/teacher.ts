const initialState: object = {
  teachers: {},
  error: null,
};
const teacher = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TEACHERS_REQUESTED":
      return { ...state, error: null };
    case "GET_TEACHERS_SUCCESS":
      return { ...state, teachers: action.teachers };
    case "GET_TEACHERS_FAILED":
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default teacher;
