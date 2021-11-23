import http from "../utils/http";

class TeacherService {
  async getTeachers() {
    const { data } = await http.get("teachers");
    return data;
  }
  async getTeacherById(teacherId: string) {
    const { data } = await http.get(
      `teachers?id=${teacherId}`
    );
    return data;
  }
  async getTeacherByUserId(userId: string) {
    const { data } = await http.get(`teachers?userId=${userId}`);
    return data;
  }
}

export default new TeacherService();
