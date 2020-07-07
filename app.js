const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

// lugar.getLugar(argv.direccion)
//     .then(console.log);

// clima.getClima(-38.6710116, -72.2564576)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const cordenadas = await lugar.getLugar(argv.direccion);
        const temp = await clima.getClima(cordenadas.lat, cordenadas.lng);

        return `La region de ${cordenadas.name} tiene confirmados con covid19 ${cordenadas.confirmados}, fallecidos a causa de covid19 de un total hasta la fecha de ${cordenadas.muertos} fallecidos,El clima actual de la region es ${temp}°C.`;
    } catch (e) {
        return `No se pudo detectar el clima de la region ${cordenadas.name}`;
    }




}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);