document.addEventListener('DOMContentLoaded', function() {
    const inputval = document.querySelector('#cityinput');
    const btn = document.querySelector('#add');
    const cityOutput = document.querySelector('#cityoutput');
    const description = document.querySelector('#description');
    const temp = document.querySelector('#temp');
    const wind = document.querySelector('#wind');
    const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

    function convertion(val) {
        return (val - 273).toFixed(2);
    }

    btn.addEventListener('click', function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apiKey)
            .then(res => res.json())
            .then(data => {
                const nameval = data['name'];
                const weatherDescription = data['weather'][0]['description'];
                const temperature = data['main']['temp'];
                const windSpeed = data['wind']['speed'];
                cityOutput.innerHTML = `Weather of <span>${nameval}</span>`;
                temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`;
                description.innerHTML = `Sky Conditions: <span>${weatherDescription}</span>`;
                wind.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
            })
            .catch(err => alert('You entered the wrong city name'));
    });
});
