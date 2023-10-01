function setStatusCode(time,statusCode){
  if(time=='d'){
    if(statusCode==200||statusCode==201||statusCode==202){
        // Thunderstorm with light rain
        return `icons/sun/rainwiththunder.png`
    }else  if(statusCode==230||statusCode==231||statusCode==232||statusCode==233){
        // Thunderstorm
        return `icons/sun/heavythunder.png`
    }else  if(statusCode==300||statusCode==301||statusCode==302){
        // drizzle
        return `icons/sun/rain.png`
    }else  if(statusCode==500||statusCode==501||statusCode==520){
        // light rain
        return `icons/sun/rain.png`
    }else  if(statusCode==502||statusCode==521||statusCode==522){
        // heavy rain
        return `icons/sun/heavyrain.png`
    }else  if(statusCode==511){
        // freezing rain
        return `icons/sun/freezingrain.png`
    }else  if(statusCode==600||statusCode==601||statusCode==621||statusCode==622||statusCode==623){
        // Snow
        return `icons/sun/snow.png`
    }else  if(statusCode==611||statusCode==612){
        // Breeze
        return `icons/sun/breezy.png`
    }else  if(statusCode==700||statusCode==711||statusCode==721||statusCode==731||statusCode==741||statusCode==751){
        // Fog
        return `icons/sun/cloudybreezewithsun.png`
    }else if(statusCode==800){
        // Clear sky
        return `icons/sun/clear.png`
    }else  if(statusCode==801||statusCode==802||statusCode==803){
        // Clouds
        return `icons/sun/brokencloud.png`
    }else  if(statusCode==804){
        // Overcast
        return `icons/sun/cloud.png`
    }else{

    }


  }  
  else if(time=='n'){
    if(statusCode==200||statusCode==201||statusCode==202){
        // Thunderstorm with light rain
        return `icons/sun/thundernight.png`
    }else  if(statusCode==230||statusCode==231||statusCode==232||statusCode==233){
        // Thunderstorm
        return `icons/sun/thunderwithcloudnight.png`
    }else  if(statusCode==300||statusCode==301||statusCode==302){
        // drizzle
        return `icons/sun/nightrain.png`
    }else  if(statusCode==500||statusCode==501||statusCode==520){
        // light rain
        return `icons/sun/nightrain.png`
    }else  if(statusCode==502||statusCode==521||statusCode==522){
        // heavy rain
        return `icons/sun/heavyrainnight.png`
    }else  if(statusCode==511){
        // freezing rain
        return `icons/sun/nightfreezingrain.png`
    }else  if(statusCode==600||statusCode==601||statusCode==621||statusCode==622||statusCode==623){
        // Snow
        return `icons/sun/snowknight.png`
    }else  if(statusCode==611||statusCode==612){
        // Breeze
        return `icons/sun/breezynight.png`
    }else  if(statusCode==700||statusCode==711||statusCode==721||statusCode==731||statusCode==741||statusCode==751){
        // Fog
        return `icons/sun/nightcloudybreeze.png`
    }else if(statusCode==800){
        // Clear sky
        return `icons/sun/clearnight.png`
    }else  if(statusCode==801||statusCode==802||statusCode==803){
        // Clouds
        return `icons/sun/brokencloudnight.png`
    }else  if(statusCode==804){
        // Overcast
        return `icons/sun/cloudnight.png`
    }else{

    }


  }  
   
}



export default setStatusCode