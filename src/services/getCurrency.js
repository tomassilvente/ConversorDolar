import axios from "axios";

export default async function getCurrency(amount){

    amount = parseInt(amount)
    const options = {
        "method": "GET",
        "url": `https://api.fxratesapi.com/convert?from=USD&to=ARS&date=2024-03-24&amount=${amount}&format=json`
    };

    let result = axios.request(options)
        .then(function (response) {
            const {data} = response
            const {result} = data
            console.log(result)
            return result
        })
        .catch(function (error) {
            console.error(error);
        });

    return result
    
 }