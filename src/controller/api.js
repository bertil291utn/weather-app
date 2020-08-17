const API = (() => {
  const getDataByIpCheck = async () => {
    const response = await fetch(
      `http://api.ipstack.com/check?access_key=${process.env.API_KEY_IPSTACK}&format=1`
    );
    // const response = await fetch(`http://api.ipstack.com/139.59.11.26?access_key=${process.env.API_KEY_IPSTACK}&format=1`)
    return response.json();
  };

  const celsiusToFahrenheit = (celsiusDegree) => (celsiusDegree * 9) / 5 + 32;

  const weatherDataByCity = async (cityName) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY_OPENWEATHERMAP}&units=metric`
    );
    return response.json();
  };

  const sanitizeNames = (name) => name.trim().toLowerCase().replace(/\s/g, '-');

  const getDefaultImage = () => process.env.DEFAULT_IMAGE;

  const getDefaultCityImage = async (weatherDescription) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${sanitizeNames(
        weatherDescription
      )}-city&client_id=${process.env.API_KEY_UNSPLASH}`
    );
    // const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=xyz-city&client_id=${API_KEY_UNSPLASH}`)
    const resp = await response.json();
    return resp.results[0].urls.full || getDefaultImage();
  };

  const cityBackgroundImage = async (cityName) => {
    const response = await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${sanitizeNames(
        cityName
      )}/images/`
    );
    // const response = await fetch(`https://api.teleport.org/api/urban_areas/slug:new-york/images/`)
    const resp = await response.json();
    return resp.photos[0].image.web;
  };

  return {
    getDataByIpCheck,
    celsiusToFahrenheit,
    weatherDataByCity,
    getDefaultCityImage,
    cityBackgroundImage,
  };
})();

export default API;
