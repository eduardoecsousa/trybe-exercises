const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// const sendMarsTemperature = (callback) => {
//   setTimeout(() => {
//     const message = `A temperatura de Marte é: ${getMarsTemperature()} graus celsius`
//     console.log(message);
//   }, messageDelay());
// }

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);


const sendMarsTemperature = (callback, erro) => {
  const temperaturaF = toFahrenheit(getMarsTemperature());
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.6;
    if (didOperationSucceed) {
      if (callback === greet) {
        callback(getMarsTemperature());
      } else {
        callback(temperaturaF);
      }
    } else {
      const messageErro = 'Robot is busy';
      erro(messageErro);
    }
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit, handleError); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet, handleError);