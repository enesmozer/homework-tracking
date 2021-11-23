export const login = () => ({
  type: "LOGIN_REQUESTED",
});
export const getTeachers = () => ({
  type: "GET_TEACHERS_REQUESTED",
});

export const getTeacherById = (id: string | undefined) => ({
  type: "GET_TEACHER_BY_ID_REQUESTED",
  id,
});

export const getStudents = (teacherId: string | undefined) => ({
  type: "GET_STUDENTS_REQUESTED",
  teacherId,
});
export const getHomeworksByStudent = (studentId: string | undefined) => ({
  type: "GET_HOMEWORKS_REQUESTED",
  studentId,
});
export const getStudentByUserId = (userId: string | undefined) => ({
  type: "GET_STUDENT_BY_USERID_REQUESTED",
  userId,
});
export const getTeacherByUserId = (userId: string | undefined) => ({
  type: "GET_TEACHER_BY_USERID_REQUESTED",
  userId,
});