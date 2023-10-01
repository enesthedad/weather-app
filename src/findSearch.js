import setStatusCode from "./console"


const main = document.getElementById('main')
const todayHeader=document.getElementById('today-header')

function createMain(city){

    main.innerHTML= `  <div class="main-img flex justify-center">
        <img class="page-img self-center flex h-32 md:h-[64px] lg:h-64" src="${setStatusCode(city[0].pod,city[0].weather.code)}" alt="">
    </div>
    <div class="main-temperature">
        <h2 class="temperature text-white text-[48px]">${city[0].app_temp}&deg;</h2>
    </div>
    <div class="precipitations text-white flex p-5 flex-col text-xl">
        <div class="precipitations-header font-semibold mb-4">
            ${String(city[0].city_name).toUpperCase()}
        </div>
        <div class="precipitations-min-max justify-center flex gap-5">
            <div class="max flex align-center">
            <img src="icons/cloud.png" class='h-6 mr-2' alt="cloud"> ${city[0].clouds} %
            </div>
            <div class="min flex align-center">
            <img src="icons/wind.png" class='h-6 mr-2' alt="wind"> ${Number(city[0].wind_spd).toFixed(2)} &#13223;
            </div>
        </div>
    </div>`
        todayHeader.innerHTML=`
        <h1>Today</h1>
        <div class="date">${city[0].datetime}</div>
    `


}
export default createMain