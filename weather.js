class Weather {
  constructor(city, state) {
    this.apiKey = "73d209bee7aff29bcbcb390cf356b05e";
    this.city = city;
    this.state = state;
  }

  //Ftech weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}