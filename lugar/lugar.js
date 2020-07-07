const axios = require('axios');
//const encodedULR = encodeURI(argv.direccion);
var datetime = require('node-datetime');
var dt = datetime.create();
dt.offsetInDays(-1);

var formatted = dt.format('m/d/Y');


const getLugar = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://chile-coronapi1.p.rapidapi.com/v3/latest/regions?id=${encodedUlr}`,
        headers: {
            'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK',
            'X-RapidAPI-Host': 'chile-coronapi1.p.rapidapi.com'

        }

    });

    const resp = await instance.get();

    if (resp.data.regionData.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }


    const fecha = '07/06/2020';
    const zona = resp.data.regionInfo;
    const name = resp.data.region;
    const data = resp.data.regionData[formatted];
    const confirmados = data.confirmed;
    const muertos = data.deaths;
    const lat = zona.lat;
    const lng = zona.long;


    return {
        name,
        confirmados,
        muertos,
        lat,
        lng
    }
}


module.exports = {
    getLugar
}