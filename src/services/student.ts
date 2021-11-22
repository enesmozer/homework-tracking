import http from "../utils/http";

class StudentService {
  async getStudentByTeacher(teacherId: string) {
    const { data } = await http.get(`/student?teacher=${teacherId}`);
    return data;
  }
//   uploadHomework(studentId: string, homework: any) {}
}
export default new StudentService();
