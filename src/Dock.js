const Scooter = require('./Scooter')

class Dock {
    static all = []
    constructor (location, capacity) {
        this.registry = []
        this.location = location
        this.capacity = capacity
    }

    createScooter () {
        if (this.registry.length === this.capcaity) 
            throw new Error ('Dock is full')

        const scooter = new Scooter()
        this.registry.push(scooter)
    }
}

const mancDock = new Dock('Manchester', 5)

mancDock.createScooter()
mancDock.createScooter()
mancDock.createScooter()
mancDock.createScooter()
mancDock.createScooter()
mancDock.createScooter()

console.log(mancDock)

module.exports = { Dock }