// Date(year, month, day, hour, minute, second, ms)

// const date0 = new Date(2020, 10, 7, 15, 23, 65, 876);
// const date1 = new Date("2020-11-07T14:24:05.876Z");
// const date2 = new Date(1_700_000_000_000_0);

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayOfTheWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(dayOfTheWeek);



date.setFullYear(year+1);
date.setMonth(month+1);
date.setDate(day+1);
date.setHours(hour+1);
date.setMinutes(minutes+1);
date.setSeconds(seconds+1);

year = date.getFullYear();
month = date.getMonth();
day = date.getDate();
hour = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();
dayOfTheWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
