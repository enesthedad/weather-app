import tableCreate from "./coords";
import createDetail from "./detailCreater";
import createMain from "./findSearch";

const getSearch=function(citySearch,API_KEY){
    let getWeather = async function(){
        let data = await fetch(`https://api.weatherbit.io/v2.0/current?city=${citySearch}&key=${API_KEY}`).then(response=>response.json());
        let city = await data.data;
        console.log(city);
        let hourlyInfo=await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city[0].city_name}&key=${API_KEY}&hours=48`).then(response=>response.json());
        const hourlyData = hourlyInfo.data;
        tableCreate(hourlyData,city);
        createDetail(city);
        createMain(city)
        
    }
    getWeather()
}




export default getSearch