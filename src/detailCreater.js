import setStatusCode from "./console";


const detailContainer = document.getElementById('detail-weather')



function createDetail(city){
    detailContainer.innerHTML=`
         
        <div class="div flex md:flex-col lg:flex-col justify-center items-center">
            <div class="section1 w-1/2">
                
                <img src="${setStatusCode(city[0].pod,city[0].weather.code)}" class="weather w-4/5" alt="">
        
            </div>
            <div class="section2 flex flex-col gap-4 w-1/2 text-2xl text-white">
                
                <div class="city">${city[0].city_name}</div>
                <div class="temperature">${city[0].temp}&deg;</div>
    
                <div class="description">${city[0].weather.description}</div>
        
            </div>    
        </div>
        <div class="humidity flex flex-row align-middle"><img class="h-8 mr-2" src="icons/humidity.png" alt=""><span class="mr-2 font-semibold">Humidity:</span>${city[0].rh}</div>
        <div class="apparent-temperature flex flex-row align-middle"><img class="h-8 mr-2" src="icons/thermometer.png" alt=""><span class="mr-2 font-semibold">Apparent Temperature:</span>${city[0].app_temp}&deg;</div>
        <div class="air-quaility flex flex-row align-middle"><img class="h-8 mr-2" src="icons/air-flow.png" alt=""><span class="mr-2 font-semibold">Air Quality:</span>${city[0].aqi}</div>
        <div class="wind flex flex-col gap-8">
            <div class="speed flex flex-row align-middle"><img class="h-8 mr-2" src="icons/windy.png" alt=""><span class="mr-2 font-semibold">Wind speed:</span>${Number(city[0].wind_spd).toFixed(2)} m/s</div>
            <div class="direction flex flex-row align-middle"><img class="h-8 mr-2" src="icons/wind.png" alt=""><span class="mr-2 font-semibold">Wind direction:</span>${city[0].wind_dir} &deg;</div>
        </div>
        <div class="cloud flex flex-row align-middle"><img class="h-8 mr-2" src="icons/cloud.png" alt=""><span class="mr-2 font-semibold">Cloud:</span>${city[0].clouds}%</div>
        <div class="pressure flex flex-row align-middle"><img class="h-8 mr-2" src="icons/pressure-gauge.png" alt=""><span class="mr-2 font-semibold">Pressure:</span>${city[0].pres}</div>
        <div class="visibility flex flex-row align-middle"><img class="h-8 mr-2" src="icons/visibility.png" alt=""><span class="mr-2 font-semibold">Visibility:</span>${city[0].vis}</div>
        <div class="uv flex flex-row align-middle"><img class="h-8 mr-2" src="icons/rays.png" alt=""><span class="mr-2 font-semibold">UV:</span>${Number(city[0].uv).toFixed(2)}</div>
    
        `;
}


export default createDetail