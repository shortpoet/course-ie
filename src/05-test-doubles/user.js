import axios from "axios";

const userUrl = "https://jsonplaceholder.typicode.com/users/";

export default {
  validateUser(user) {
    return Boolean(user.id && user.id > 0);
  },
  createUser(id, name) {
    const user = { id, name };
    if (!this.validateUser(user)) {
      throw new Error("Invalid user: it doesn't have an id");
    }
    return user;
  },
  fetchUser(id) {
    return axios.get(`${userUrl}${id}`);
  },
  saveUser(user) {
    localStorage.setItem("user", user);
  }
};
