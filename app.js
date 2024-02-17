let apiKey = "027f7961665ca0c59c63da6fd07d1497"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let city = document.querySelector('.app input')
let btn = document.querySelector('.app .icon')
let clouds = document.querySelector('.details .clouds img')

async function checkWeather(cityName) {
    let response = await fetch(apiUrl + cityName + `&appid=${apiKey}`)
    let data = await response.json()


    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h"


    if (data.weather[0].main == 'Clouds') {
        clouds.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Drizzle') {
        clouds.src = 'images/drizzle.png'
    } else if (data.weather[0].main == 'Rain') {
        clouds.src = 'images/rain.png'
    } else if (data.weather[0].main == 'Mist') {
        clouds.src = 'images/mist.png'
    } else if (data.weather[0].main == 'Clear') {
        clouds.src = 'images/clear.png'
    } 
}

btn.addEventListener("click", ()=> {
   
    checkWeather(city.value)
})
