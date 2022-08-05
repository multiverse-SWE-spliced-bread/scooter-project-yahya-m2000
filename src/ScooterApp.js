const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  
  constructor(scooterSessions) {
    this.scooterSessions = scooterSessions
    this.registry = []
  }

  register(username, password, age) {
    for (let i = 0; i < this.registry.length; i++) {
      if(this.registry[i].username == username)
      /* if(this.registry.find(o => o.username == username)) */
      /* if(this.registry.some(item => item.username == username))  */{
        throw new Error('This username is already taken')
      }
    }
    const user = new User(username, password, age)
    this.registry.push(user)
    return user
  }

  login(username, password) {
    // find user in the array of users
    const user = this.user.find(u => u.username == username)
    if (!user) throw new Error('Please sign up first')
    if (user.password !== password) throw new Error('Access denied')
    user.loginStatus = true
  }
}
const app = new ScooterApp()
const yahya = app.register('yahya', 'password123', 20)
console.log(app.registry)
console.log(app.login())

module.exports = ScooterApp;
