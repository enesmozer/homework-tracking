import http from "../utils/http";

class TeacherService {
  async getTeachers() {
    const { data } = await http.get("teachers");
    return data;
  }
}

export default new TeacherService();