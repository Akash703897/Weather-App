const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
 let API_key = "79171fe8df10648dbeab8236fb8c0ffb";

 const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

  async function Weather(city){
    let API_key = "79171fe8df10648dbeab8236fb8c0ffb";

    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    
    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("weather_data");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://tse3.mm.bing.net/th?id=OIP.qrCK5s3Esd5m0wtHMVobIQHaFV&pid=Api&P=0&h=180";
            break;
        case 'Clear':
            weather_img.src = "https://tse3.mm.bing.net/th?id=OIP.OSotHMLHvrImX-jJnXSgAwHaHZ&pid=Api&P=0&h=180";
            break;
        case 'Rain':
            weather_img.src = "https://tse1.mm.bing.net/th?id=OIP.cJBRyBJmrATjnEv4qCFIuAHaHa&pid=Api&P=0&h=180";
            break;
        case 'Mist':
            weather_img.src = "https://tse4.mm.bing.net/th?id=OIP.vrJ1ZXmX0mqjni6JJ6jwbAHaHa&pid=Api&P=0&h=180";
            break;
        case 'Snow':
            weather_img.src = "https://tse2.mm.bing.net/th?id=OIP.jDo1UM49Q_52GZviSEG2VgHaF2&pid=Api&P=0&h=180";
            

    } 

    console.log(getweather_data);
}


searchBtn.addEventListener('click', ()=>{
    Weather(inputBox.value);
});  
