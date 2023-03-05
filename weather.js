const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "2ee8f66df2cc3164cc90ea738205efc9";
const weatherIcon = document.querySelector("#weatherIcon");
const weatherCondition = document.querySelector("#weather-conditions-text");
let dayNight = "";

const today = new Date();
const hour = today.getHours();
if(hour >= 6 && hour < 18){
  dayNight = "day";
} else {
  dayNight = "night";
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${Math.floor(data.main.temp)}°C`;
      weatherCondition.innerText = data.weather[0].main;
      if(data.weather[0].main === "Rain"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/rain-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/rain-moon.svg'
        }
      } else if(data.weather[0].main === "Clouds"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/cloud-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/cloud-moon.svg'
        }
      
      } else if(data.weather[0].main === "Clear"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/moon.svg'
        }
      
      } else if(data.weather[0].main === "Snow"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/snow-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/snow-moon.svg'
        }
      
      } else if(data.weather[0].main === "Drizzle"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/drizzle-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/drizzle-moon.svg'
        }
        
      } else if(data.weather[0].main === "Thunderstorm"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/thunderstorm-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/thunderstorm-moon.svg'
        }
      
      } else if(data.weather[0].main === "Mist" || data.weather[0].main === "Haze" || data.weather[0].main === "Smoke" || data.weather[0].main === "Dust" || data.weather[0].main === "Fog" || data.weather[0].main === "Sand" || data.weather[0].main === "Ash" || data.weather[0].main === "Squall" || data.weather[0].main === "Tornado"){
        if(dayNight === "day"){
          weatherIcon.src = 'weatherIcon/fog-sun.svg'
        } else if(dayNight === "night"){
          weatherIcon.src = 'weatherIcon/fog-moon.svg'
        }
      }
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

