import http from '../utils/http'

class UserService {
    async login() {
        const { data } = await http.get(`/users`);
        return data;
    }
}
export default new UserService();