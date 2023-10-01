
const forecastContainer = document.getElementById('forecast');
import setStatusCode from "./console";
function createForecast(arr){
    forecastContainer.innerHTML=''
    for (let index = 0; index < 7; index++) {
        let dailyForecast = document.createElement('div');
        dailyForecast.innerHTML=`
        <div class="day-card  bg-slate-200 bg-opacity-20 rounded-lg p-4 text-white flex flex-col">
            <div class="flex justify-between font-semibold mb-4">
                <div class="datetime">${arr[index].datetime}</div>
                    <div class="temperature">${arr[index].temp} C&deg;</div>
            </div>
            <div class="flex gap-10 justify-center items-center mr-4">

                <div class="flex flex-col align-top justify-start items-start gap-5">
                    <div class="flex align-top justify-start items-start gap-4">
                        <div class="max flex items-center align-middle"><img src="icons/thermometer.png" class='h-6 mr-2' alt="">${arr[index].high_temp}&deg;</div>
                        <div class="min flex  align-middle"><img src="icons/thermometer.png" class='h-6 mr-2' alt="">${arr[index].low_temp}&deg;</div>
                    </div>
                    <div class="flex align-top justify-center items-center gap-4">
                        <div class="cloud flex  items-center  align-middle"><img src="icons/cloud.png" class='h-6 mr-2' alt="">${arr[index].clouds} %</div>
                        <div class="wind flex  items-center align-middle"><img src="icons/wind.png" class='h-6 mr-1' alt=""><span class="mr-1">${arr[index].wind_spd}</span>m/s</div>
                
                    </div>
                    <div class="flex align-top justify-center items-center gap-4">
                        <div class="wind flex  items-center  align-middle"><img src="icons/visibility.png" class='h-6 mr-1' alt="">${arr[index].vis}km</div>
                         <div class="wind flex  items-center  align-middle"><img src="icons/rays.png" class='h-6 mr-1' alt="">${arr[index].uv}</div>
                    </div>
                </div>
                <img class="h-[100px]" src="${setStatusCode('d',arr[index].weather.code)}" alt="">
                
            </div>
            
           
        </div>
        `
        forecastContainer.appendChild(dailyForecast);

 
    }
    
}


export default createForecast