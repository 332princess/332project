import axios from 'axios';

export default class ChatService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  async runServer() {
    return this.api.get('/server');
  }

  async signup(username) {
    return this.api.post('/signup', { username });
  }

  async getRoomList() {
    return this.api.get('/chat');
  }

  async getMyRooms(username) {
    return this.api.get(`/user/${username}`);
  }

  async postRoom(username, title) {
    return this.api.post('/chat', { username, title });
  }

  async joinRoom(username, title) {
    return this.api.post(`/user/${title}`, { username });
  }

  async getRoom(title) {
    return this.api.get(`/chat/${title}`);
  }
}
