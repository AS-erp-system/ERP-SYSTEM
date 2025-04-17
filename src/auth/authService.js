export const fakeAuth = {
  users: [
    { username: "admin", password: "123", role: "admin" },
    { username: "director", password: "123", role: "director" },
    { username: "teacher", password: "123", role: "teacher" },
    { username: "student", password: "123", role: "student" },
  ],
  login(username, password) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
    return null;
  },
  logout() {
    localStorage.removeItem("user");
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};
