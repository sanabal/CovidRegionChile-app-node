const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=608cebee95ff1cd05f89d3a798210d3c&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}