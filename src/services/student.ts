import http from "../utils/http";
class StudentService {
  async getStudentByTeacher(teacherId: string) {
    const { data } = await http.get(`/students?teacher=${teacherId}`);
    return data;
  }
  async getStudentByUserId(userId: string) {
    const { data } = await http.get(`/students?userId=${userId}`);
    return data;
  }
  //   uploadHomework(studentId: string, homework: any) {}
}
export default new StudentService();
