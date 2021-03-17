const exchangeRatesAPI = {
  url: 'https://v6.exchangerate-api.com/v6/',
  key: 'e114446e8cf339d37f9468a0',
  async get(currency) {
    try {
      const response = await fetch(`${this.url + this.key}/latest/${currency}`);

      if (!response.ok) {
        throw new Error('Data not available');
      }

      const exchangeRates = await response.json();

      return exchangeRates.conversion_rates;
    } catch (error) {
      return error;
    }
  },
};

export default exchangeRatesAPI;
