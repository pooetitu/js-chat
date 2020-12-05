module.exports = class Client {
  constructor(username, socket) {
    console.log(`create user Uname: ${username} id:${socket.id}`);
    this.username = username;
    this.socket = socket;
  }
};
