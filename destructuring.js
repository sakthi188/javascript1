var voxel={x:3.6,y:7.4,z:6.54};
const {x:a,y:b,z:c}=voxel;
console.log(a+" "+b+" "+c);

const AVG_TEMPERATURES={
    today:77.5,
    tomorrow:79
};
function getTemp(avgTemp)
{
    "use strict";
    const {tomorrow:tempOfTomo}=avgTemp;
    return tempOfTomo;

}
console.log(getTemp(AVG_TEMPERATURES));

const LOCAL_FORECAST={
  today:{min:72,max:83},
  tomorrow:{min:73.3,max:84.6}
};
function getMaxOfTmrw(forecast)
{
    "use strict"

    const { tomorrow: { max : maxOfTomo }} = forecast;

    return maxOfTomo;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
