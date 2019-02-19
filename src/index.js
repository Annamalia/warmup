module.exports = function warmup(temperature) {
  let celsius = temperature;
  let fahrenheit = celsius *(9/5) + 32;
  fahrenheit = Math.floor(fahrenheit);
  return fahrenheit;
};

