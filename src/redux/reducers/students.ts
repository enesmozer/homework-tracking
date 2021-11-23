const initialState: object = {
  students: {},
  error: null,
};
const students = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_STUDENTS_REQUESTED":
      return { ...state, error: null };
    case "GET_STUDENTS_SUCCESS":
      return { ...state, students: action.students };
    case "GET_STUDENTS_FAILED":
      return { ...state, error: action.message };
    case "GET_STUDENT_BY_USERID_SUCCESS":
      return { ...state, students: action.students[0] };
    case "GET_STUDENT_BY_USERID_FAILED":
      return { ...state, error: action.message };
    default:
      return state;
  }
};

export default students;
