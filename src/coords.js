import setStatusCode from "./console";
const todayTable = document.getElementById('today-table');
function tableCreate(arr,city){
    todayTable.innerHTML='';
    for (let index = 0; index <= 12; index++) {
        const hourlyContainer = document.createElement('div');
        hourlyContainer.classList.add
        hourlyContainer.innerHTML=
        
        `<div class="p-2 w-[100px] flex flex-col justify-center items-center">
        <h1 class="text-xl">${arr[index].app_temp} &deg;C</h1>
        <img class="w-[75px]" src="${setStatusCode(arr[index].pod,arr[index].weather.code)}" alt="">
        <h1 class="text-xl">${arr[index].timestamp_local.substr((arr[index].timestamp_local).length - 8).substr(0,5)}</h1>
    </div>`
        todayTable.appendChild(hourlyContainer);
    }
   
}


export default tableCreate;