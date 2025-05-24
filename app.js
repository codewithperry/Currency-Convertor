const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://currencyconversionapi.com/api/v1/live?access_key=12fb7cafa0a52404afb51904a8774ce8";
const url = proxyUrl + apiUrl;


async function getData() {
    let response = await fetch(url);
    let output = await response.json();


    console.log(output);
}
