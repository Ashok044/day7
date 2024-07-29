// Fetch the REST Countries data
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // 1. Get all the countries from Asia continent/region using Filter method
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using Filter method
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // 3. Print the following details name, capital, flag using forEach method
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Capital: ${country.capital ? country.capital[0] : 'No Capital'}`);
      console.log(`Flag: ${country.flags.png}`);
      console.log('------------------------');
    });

    // 4. Print the total population of countries using reduce method
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total Population of all countries:', totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usdCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using US Dollars:');
    usdCountries.forEach(country => {
      console.log(`Name: ${country.name.common}`);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));
