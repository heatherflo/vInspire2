

export class Weather {
  constructor(data) {
    this.temp = data.main.temp //in kelvin
    this.FTemp = Math.floor((this.temp - 273.15) * 1.8 + 32)
    this.CTemp = Math.floor(this.temp - 273.15)
    this.toggleTemp = true
  }
}