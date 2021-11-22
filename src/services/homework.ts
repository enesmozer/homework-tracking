import http from "../utils/http";

class StudentService {
  async getHomeworkByStudent(student: string) {
    const { data } = await http.get(`/homework?studentId=${student}`);
    return data;
  }
}
export default new StudentService();
