const weatherIconMap = {
  1000: "sunny", // or 'nights_stay' for night Clear
  1003: "partly_cloudy", // Partly cloudy
  1006: "cloud", // Cloudy
  1009: "cloud", // Overcast
  1030: "foggy", // Mist
  1063: "umbrella", // Patchy rain possible
  1066: "ac_unit", // Patchy snow possible
  1069: "ac_unit", // Patchy sleet possible
  1072: "ac_unit", // Patchy freezing drizzle possible
  1087: "thunderstorm", // Thundery outbreaks possible
  1114: "ac_unit", // Blowing snow
  1117: "ac_unit", // Blizzard
  1135: "foggy", // Fog
  1147: "foggy", // Freezing fog
  1150: "grain", // Patchy light drizzle
  1153: "grain", // Light drizzle
  1168: "ac_unit", // Freezing drizzle
  1171: "ac_unit", // Heavy freezing drizzle
  1180: "umbrella", // Patchy light rain
  1183: "umbrella", // Light rain
  1186: "umbrella", // Moderate rain at times
  1189: "umbrella", // Moderate rain
  1192: "umbrella", // Heavy rain at times
  1195: "umbrella", // Heavy rain
  1198: "ac_unit", // Light freezing rain
  1201: "ac_unit", // Moderate or heavy freezing rain
  1204: "ac_unit", // Light sleet
  1207: "ac_unit", // Moderate or heavy sleet
  1210: "ac_unit", // Patchy light snow
  1213: "ac_unit", // Light snow
  1216: "ac_unit", // Patchy moderate snow
  1219: "ac_unit", // Moderate snow
  1222: "ac_unit", // Patchy heavy snow
  1225: "ac_unit", // Heavy snow
  1237: "ac_unit", // Ice pellets
  1240: "umbrella", // Light rain shower
  1243: "umbrella", // Moderate or heavy rain shower
  1246: "umbrella", // Torrential rain shower
  1249: "ac_unit", // Light sleet showers
  1252: "ac_unit", // Moderate or heavy sleet showers
  1255: "ac_unit", // Light snow showers
  1258: "ac_unit", // Moderate or heavy snow showers
  1261: "ac_unit", // Light showers of ice pellets
  1264: "ac_unit", // Moderate or heavy showers of ice pellets
  1273: "thunderstorm", // Patchy light rain with thunder
  1276: "thunderstorm", // Moderate or heavy rain with thunder
  1279: "thunderstorm", // Patchy light snow with thunder
  1282: "thunderstorm", // Moderate or heavy snow with thunder
};

async function getWeatherData(apiKey, city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
      { mode: "cors" },
    );
    const data = await response.json();
    if (data.error) {
      alert(data.error.message);
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getWeatherIcon(conditionCode, isDay) {
  if (conditionCode === 1000) {
    return isDay ? "sunny" : "nights_stay";
  }
  return weatherIconMap[conditionCode];
}

class App {
  constructor() {
    this.apiKey = "e22388f0771d490fab774625240801";
    this.location = "auto:ip";

    this.domElements = {
      currentIcon: document.getElementById("condition-icon"),
      searchForm: document.getElementById("search-form"),

      current: {
        temperature: document.getElementById("temperature"),
        wind_kph: document.getElementById("wind-kph"),
        humidity: document.getElementById("humidity"),
        feelslike: document.getElementById("feelslike"),
      },
    };

    this.init();
  }

  parseDate(dateString) {
    const date = new Date(dateString);
    return `${date.toDateString()}, ${date.getHours()}:${date.getMinutes()}`;
  }

  updateElement(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = newValue;
    }
  }

  bindKeyEvents() {
    this.domElements.searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const city = document.getElementById("search-input").value;
      const data = await getWeatherData(this.apiKey, city);
      if (data !== null) {
        this.location = city;
        this.weatherData = data;
        this.render();
        this.domElements.searchForm.reset();
      }
    });
  }

  render() {
    const renderLocation = () => {
      this.updateElement("location-name", this.weatherData.location.name);
      this.updateElement("location-region", this.weatherData.location.region);
      this.updateElement("location-country", this.weatherData.location.country);
      this.updateElement(
        "location-localtime",
        this.parseDate(this.weatherData.location.localtime),
      );
    };

    const renderCurrent = () => {
      this.updateElement(
        "temperature",
        this.weatherData.current.temp_c + " °C",
      );
      this.updateElement(
        "feelslike",
        this.weatherData.current.feelslike_c + " °C",
      );
      this.updateElement("humidity", this.weatherData.current.humidity + " %");
      this.updateElement(
        "wind-kph",
        this.weatherData.current.wind_kph + " km/h",
      );

      this.updateElement(
        "condition-icon",
        getWeatherIcon(
          this.weatherData.current.condition.code,
          this.weatherData.current.is_day,
        ),
      );
    };

    renderLocation();
    renderCurrent();
  }

  async init() {
    this.weatherData = await getWeatherData(this.apiKey, this.location);
    this.bindKeyEvents();
    this.render();
  }
}

export default App;
