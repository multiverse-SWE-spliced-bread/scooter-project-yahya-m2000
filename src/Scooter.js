class Scooter {
  constructor(rent, station, charge, isBroken) {
    this.licenceNumber = 10**7 * Math.floor(Math.random() * (10** 8 - 10**7))
    this.rent = rent
    this.station = station
    this.charge = charge
    this.isBroken = isBroken
  }
}

module.exports = { Scooter }
