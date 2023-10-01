const API_KEY=`7f8de59fb9284bbe86e221758c96387b`
// 1794800a1fac49ed9b8d6bbd4c359f02
// 7f8de59fb9284bbe86e221758c96387b

// IMPORTS
import createMain from './findSearch';
import tableCreate from '../src/coords';
import getSearch from './getSearch';
import createDetail from './detailCreater';
import getForecast from './forecast';

// CONTAINERS
const appContainer = document.querySelector('.app');
const forecastContainer = document.getElementById('forecast');
const detailContainer = document.getElementById('detail-weather')
// ALL CONTAINERS
const containers = document.querySelectorAll('.containers');



// BUTTONS
const searchButton = document.getElementById('search-button')
const forecastButton = document.getElementById('forecast-button');
const upButton=document.getElementById('up-button');
const logo = document.querySelector('.logo');

// SEARCH VALUE
const searchLabel = document.getElementById('search-label')




function getLocal(){
    
    navigator.geolocation.getCurrentPosition((position) => {
        return new Promise(async function(resolve,reject){
            // GETTING CURRENT WEATHER WITH GEOLOCATION API
            let data = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${API_KEY}`).then(response=>response.json());
            let city = await data.data;   
            // GETTING NEXT 18 HOURS DATA FOR CURRENT CITY
            let hourlyInfo=await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city[0].city_name}&key=${API_KEY}&hours=48`).then(response=>response.json());            
            const hourlyData = hourlyInfo.data;
            
            
            console.log(city);
            // HOURLY TABLE FOR NEXT 7 HOURS
            tableCreate(hourlyData,city);
            // CREATING APP CONTAINER
            createMain(city)
            createDetail(city)
            getForecast(city[0].city_name,API_KEY); 
    })

}

    )}
getLocal();
// SEARCH BUTTON
searchButton.addEventListener('click',(e)=>{
    e.preventDefault(); 
    const searchCity=searchLabel.value;
    if(searchCity){
        detailContainer.innerHTML=``;
        getSearch(searchCity,API_KEY);
        getForecast(searchCity,API_KEY); 

        searchLabel.value='';
    }
    else{
        
        searchLabel.value='Enter a city name!';
        searchLabel.classList.add('text-red-600');
        searchLabel.classList.add('bg-red-100');
        setTimeout(()=>{
            searchLabel.value='';
            searchLabel.classList.remove('text-red-600');
            searchLabel.classList.remove('bg-red-100');
        },3000)
    }
})
// LOGO BUTTON EVENT LISTENER
logo.addEventListener('click',(e)=>{
    e.preventDefault();
    getLocal();
    containers.forEach(btn=>btn.classList.remove('active'));
    containers.forEach(btn=>btn.classList.add('hidden'));
    appContainer.classList.remove('hidden');
    appContainer.classList.add('active');
})
// HOME BUTTON EVENT LISTENER
findLocationButton.addEventListener('click',(e)=>{
    e.preventDefault();
    containers.forEach(btn=>btn.classList.remove('active'));
    containers.forEach(btn=>btn.classList.add('hidden'));
    appContainer.classList.remove('hidden');
    appContainer.classList.add('active');
    
})
// UP BUTTON EVENT LISTENER
upButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(detailContainer.classList.contains('active')){
        containers.forEach(btn=>btn.classList.remove('active'));
        containers.forEach(btn=>btn.classList.add('hidden'));
        appContainer.classList.remove('hidden');
        appContainer.classList.add('active');
    }else{
        containers.forEach(btn=>btn.classList.remove('active'));
        containers.forEach(btn=>btn.classList.add('hidden'));
        detailContainer.classList.remove('hidden');
        detailContainer.classList.add('active');
    }

})
// FORECAST BUTTON EVENT LISTENER
forecastButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(forecastContainer.classList.contains('active')){
        containers.forEach(btn=>btn.classList.remove('active'));
        containers.forEach(btn=>btn.classList.add('hidden'));
        appContainer.classList.remove('hidden');
        appContainer.classList.add('active');
    }else{
        containers.forEach(btn=>btn.classList.remove('active'));
        containers.forEach(btn=>btn.classList.add('hidden'));
        forecastContainer.classList.remove('hidden');
        forecastContainer.classList.add('active');
    }
})
export default getLocal