const key = "82a7570434ea65c4a36d563f3e36b218"
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(Url + city + `&appid=${key}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})
