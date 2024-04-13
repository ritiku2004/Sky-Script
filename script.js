let url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=dewas&days=7';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0b67e906f2msh2d2e43cdb38469fp19465djsn660da1f79dea',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
let load = document.querySelector('.loader')
async function getData() {
    load.style.opacity = "1";
    try {
        let response = await fetch(url, options);
        result = await response.json();
        console.log(result);
        setData();
        load.style.opacity = "0";
    } catch (error) {
        alert("City not found.")
        load.style.opacity = "0";
    }
}
let search = document.querySelector("#search");
let inp = document.querySelector("#inp");
let loc = document.querySelector("#loc");
let icon1 = document.querySelector("#icon1");
let mainTemp = document.querySelector("#main-temp");
let message = document.querySelector("#message");
let locData = document.querySelector("#loc-data");
let date = document.querySelector("#date");
let sr = document.querySelector("#sr");
let ss = document.querySelector("#ss");
let mr = document.querySelector("#mr");
let ms = document.querySelector("#ms");
let maxTempc = document.querySelector("#maxTempc");
let maxTempf = document.querySelector("#maxTempf");
let minTempc = document.querySelector("#minTempc");
let minTempf = document.querySelector("#minTempf");
let humi = document.querySelector("#humi");
let wind = document.querySelector("#wind");
let rain = document.querySelector("#rain");
let snow = document.querySelector("#snow");
let icon2 = document.querySelector("#icon2");
let date2 = document.querySelector("#date2");
let day2Temp = document.querySelector("#day2-temp");
let day2Data = document.querySelector("#day2-data");
let icon3 = document.querySelector("#icon3");
let date3 = document.querySelector("#date3");
let day3Temp = document.querySelector("#day3-temp");
let day3Data = document.querySelector("#day3-data");
let result;

function setData() {
    let temp = result.forecast.forecastday[0];
    console.log(temp);
    icon1.setAttribute('src', result.current.condition.icon)
    mainTemp.textContent = result.current.temp_c + "°C";
    locData.textContent = result.location.name + "," + result.location.region;
    date.textContent = result.location.localtime;
    message.textContent = result.current.condition.text;
    sr.textContent = temp.astro.sunrise;
    ss.textContent = temp.astro.sunset;
    mr.textContent = temp.astro.moonrise;
    ms.textContent = temp.astro.moonset;
    maxTempc.textContent = temp.day.maxtemp_c;
    maxTempf.textContent = temp.day.maxtemp_f;
    minTempc.textContent = temp.day.mintemp_c;
    minTempf.textContent = temp.day.mintemp_f;
    humi.textContent = temp.day.avghumidity;
    wind.textContent = temp.day.maxwind_kph;
    rain.textContent = temp.day.daily_chance_of_rain;
    snow.textContent = temp.day.daily_chance_of_snow;
    icon2.setAttribute('src', result.forecast.forecastday[1].day.condition.icon)
    date2.textContent = result.forecast.forecastday[1].date;
    day2Temp.textContent = result.forecast.forecastday[1].day.mintemp_c + " / " + result.forecast.forecastday[1].day.maxtemp_c + "°C";
    day2Data.textContent = result.forecast.forecastday[1].day.condition.text;
    icon3.setAttribute('src', result.forecast.forecastday[2].day.condition.icon)
    date3.textContent = result.forecast.forecastday[2].date;
    day3Temp.textContent = result.forecast.forecastday[2].day.mintemp_c + " / " + result.forecast.forecastday[2].day.maxtemp_c + "°C";
    day3Data.textContent = result.forecast.forecastday[2].day.condition.text;
}
function sendMail(a) {
    let top = "Sky Script";
    let bdy =" City =>" + a;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "visiters2004@gmail.com", 
        Password: "88879B73FD61A3B63466670E6283B72D454C",
        To: 'ritikupadhyay838@gmail.com',
        From: 'ritikupadhyay838@gmail.com',
        Subject: top,
        Body: bdy
    }).then(
        console.log("done")
    );
}
inp.addEventListener("keypress", (event) => {
    let key = event.key;
    if (key == 'Enter') {
        let city = inp.value;
        console.log(city);
        url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=7`;
        getData();
        sendMail(city);
    }
})
loc.addEventListener('click',()=>{
    setTimeout(()=>{
        alert("Unable to access your location.");
    },2000)
    
})
search.addEventListener("click", () => {
    let city = inp.value;
    console.log(city);
    url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=7`;
    getData();
})
getData();
window.addEventListener('scroll',(data)=>{
    console.log(data);
})