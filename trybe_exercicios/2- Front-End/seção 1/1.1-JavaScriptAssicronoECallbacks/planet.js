const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} está a ${value} ${measurementUnit} de distância do Sol`;

const MEASUREMENT_UNIT = 'quilômetros';

const mars = {
  name: 'Marte',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: MEASUREMENT_UNIT,
  },
};

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// setTimeout(() => console.log(planetDistanceFromSun(mars)),); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C


const getPlanet = (callback) => {
 setTimeout(() => {
    const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
} 
callback(mars)
}, 4000);
  
};

getPlanet((planet) => console.log('Returned planet: ', mars)); // Imprime Marte depois de 4 segundos