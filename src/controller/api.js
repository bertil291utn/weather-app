/* eslint-disable comma-dangle */
const API = (() => {
  const getDataByIpCheck = async () => {
    const response = await fetch(
      `http://api.ipstack.com/check?access_key=${process.env.API_KEY_IPSTACK}&format=1`
    );
    return response.json();
  };

  const weatherDataByCity = async (cityName) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY_OPENWEATHERMAP}&units=metric`
    );
    return response.json();
  };

  const sanitizeNames = (name) => name.trim().toLowerCase().replace(/\s/g, '-');

  const getDefaultImage = () => 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1113&q=80';

  const cityBackgroundImage = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.teleport.org/api/urban_areas/slug:${sanitizeNames(
          cityName
        )}/images/`
      );
      const resp = await response.json();
      return resp.photos[0].image.web;
    } catch (error) {
      return getDefaultImage();
    }
  };

  return {
    cityBackgroundImage,
    getDataByIpCheck,
    weatherDataByCity,
  };
})();

export default API;
