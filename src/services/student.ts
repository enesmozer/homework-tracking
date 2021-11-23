import http from "../utils/http";
import teacherService from "./teacher";
class StudentService {
  async getStudentByTeacher(teacherId: string) {
    const { data } = await http.get(`/students?teacher=${teacherId}`);
    return data;
  }
  //   uploadHomework(studentId: string, homework: any) {}
}
export default new StudentService();
