const locationName = document.getElementById('location');
const search = document.getElementById('search');
const weather = document.getElementById('weather-section');
const info = document.getElementById('weather-info');
const cityName = document.getElementById('city');
const icon = document.getElementById('icons');
const apiurl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apikey = 'e8790e30faf0712957356ed905f5b2b4'


search.addEventListener('click', ()=> {
    var locationCity = locationName.value;
    getLocationData(apiurl+locationCity+'&appid='+apikey);
    locationName.value = '';  
});

async function getLocationData(url) {
    try{
    const response = await fetch (url);
    const respData = await response.json();
    console.log(respData);
    var tempValue = respData.main.temp;
    console.log(tempValue);
    showTemp(respData.main.temp, respData.name);}
    catch(e) {
        console.log(e);
        weather.innerText = '';
        info.innerText = 'The Location You searched for cannot be found';
    }
   
}

function showTemp(temperature, place) {
    var celsiusTemp = temperature.toFixed(0) - 273;
    weather.innerText = 'It\'s ' + celsiusTemp +'°C in ' + place;

    if(celsiusTemp<15) {
    info.innerText = 'Cold';
    }
    else if (celsiusTemp>15 && celsiusTemp<27){
    info.innerText = 'Moderate Temperature';
    }
    else if(celsiusTemp>27){
        info.innerText = 'Quite Hot';
    }

    if(celsiusTemp<15) {
        icon.innerHTML = '❄';
        }
        else if (celsiusTemp>15 && celsiusTemp<27){
        icon.innerHTML = '⛅';
        }
        else if(celsiusTemp>27){
            icon.innerText = '☀️';
        }
    

}
