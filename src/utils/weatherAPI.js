const weatherAPI = {
  url: 'https://v6.exchangerate-api.com/v6/',
  key: 'e114446e8cf339d37f9468a0',
  async get(city, lang) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=ab3aa33ecc31c6df8240b91fed05a289&units=metric`);

      if (!response.ok) {
        throw new Error('Data not available');
      }

      const data = await response.json();

      const { id: icon, description } = data.weather[0];
      const { temp } = data.main;
      const { humidity } = data.main;
      const wind = data.wind.speed;
      // htmlElements.city.value = city;
      // htmlElements.wind.innerText = `Wind: ${wind} m/s`;
      // htmlElements.temperature.innerText = `${temp} °C`;
      // htmlElements.humidity.innerText = `Humidity: ${humidity}%`;
      // htmlElements.icon.className += ` owf owf-${icon}`
      // htmlElements.error.innerText = '';

      return {
        icon, description, temp, humidity, wind,
      };
    } catch (error) {
      return error;
    }
  },
};

export default weatherAPI;
