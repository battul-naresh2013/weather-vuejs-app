export const celsius = (tempKelvin) => {
  const degreeCelsius = Math.round(tempKelvin - 273.15);
  return degreeCelsius;
};

export const fahrenheit = (tempKelvin) => {
  const degreFahrenheit = Math.round((tempKelvin - 273.15) * 1.8 + 32);
  return degreFahrenheit;
};
