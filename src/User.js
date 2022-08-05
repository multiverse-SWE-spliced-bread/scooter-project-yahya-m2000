class User {
  #email
    constructor(username, password, email, age, loginStatus, securityCode) {
      this.username = username
      this.password = password
      this.email = email
      this.age = age
      this.loginStatus = false
      this.securityCode = null
      this.scooters = null
    }

    updateUsername (newUsername, password) {
      if (password !== this.password) throw new Error('WRONG')
      this.username = newUsername
    }

    updatePassword (securityCode, newPassword) {
      if (securityCode !== this.securityCode) throw new Error('WRONG')
      this.password = newPassword
    }
    
    rentScooter (dock) {
      if (!this.loginStatus) throw new Error('must be signed in')
      this.scooters.pop()
    }

    returnScooter (dock) {
      dock.scooters.push(this.scooter)
      if (this.scooter)
      scooter.currentUser = null
      this.scooter = dock.scooters.pop()
    }

  }
  
  module.exports = User