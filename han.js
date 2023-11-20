const apiKey = "7fc5ea292ab900d852e2d8c29e5ec09c";
const searchBox = document.querySelector(".search-input");
const  weatherIcon = document.querySelector(".weather-icon")
const searchBtn = document.querySelector(".search button");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
  
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "humidity") {
      weatherIcon.src = "humidity.png";
    } else if (data.weather[0].main == "mist") {
      weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "snow") {
      weatherIcon.src = "snow.png";
    } else if (data.weather[0].main == "wind") {
      weatherIcon.src = "wind.png";
    }
    document.querySelector(".weather").style.display ="block";
    }
    
  }
searchBtn.addEventListener("click",()=>{

  checkWeather(searchBox.value);
});


