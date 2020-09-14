//convert from Celsius to Fahrenheit
function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
      return (c + " is freezing temperature");
    else
      return (c + " is above freezing temperature");
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9);
    return celsius;
  }

  /*

const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));

const convertToCelsius = temperature => (temperature - 32) * (5 / 9);

const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")

  */