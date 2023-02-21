const convertToCelsius = function(fahrenheitTemperature) 
{
  let result = (5 / 9) * (fahrenheitTemperature - 32);

  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemperature) 
{
  let result = (celsiusTemperature * (9 / 5)) + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
