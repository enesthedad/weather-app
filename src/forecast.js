import createForecast from "./forecastCreator";
const getForecast=function(citySearch,API_KEY){
    let getWeather = async function(){
        // https://api.weatherbit.io/v2.0/forecast/hourly?city=${city[0].city_name}&key=${API_KEY}&hours=48
        let data = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${citySearch}&key=${API_KEY}`).then(response=>response.json());
        let temperatures = await data.data;
        console.log(temperatures);
    
        createForecast(temperatures);
    }
    
    getWeather()
}

export default getForecast