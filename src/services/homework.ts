import http from "../utils/http";

class HomeworkService {
  async getHomeworkByStudent(student: string) {
    const { data } = await http.get(`/homeworks?studentId=${student}`);
    return data;
  }
}
export default new HomeworkService();
