
var hourHtml = document.querySelector("#hours");
var minHtml= document.querySelector("#minutes");
var secHtml = document.querySelector("#seconds");
var ampmHtml = document.querySelector("#ampm");
var header = document.querySelector("#header");

var months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

var days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];  //getDay() method returns the day of the week (0 to 6) of a date.Sunday = 0, Monday=1



function clock(){
  var date = new Date();
  

  if(date.getHours() < 10){
    hourHtml.textContent  = "0" + date.getHours()
  }else{
    hourHtml.textContent = date.getHours()
  };
//   console.log(hourHtml.textContent);


  if (date.getMinutes() < 10){
     minHtml.textContent = "0" + date.getMinutes()      
  }else{
    minHtml.textContent = date.getMinutes()
  };
//   console.log(minHtml.textContent);


  if (date.getSeconds() < 10){
    secHtml.textContent = "0" + date.getSeconds()    
  }else{
    secHtml.textContent = date.getSeconds()
  };
//   console.log(secHtml.textContent);


  if (date.getHours() > 12){
    ampmHtml.textContent = "pm"
  }else{
    ampmHtml.textContent = "am"
  };
//   console.log(ampmHtml.textContent);

  const weekDay = days[date.getDay()];
//   console.log(weekDay);
  const month = months[date.getMonth()];
//   console.log(month);
  const day = date.getDate();
  const year = date.getFullYear();
  let headerString = weekDay + ", " + month +  " " + day + ", " + year;

  header.textContent = headerString;
//   console.log(header.textContent);

} 

clock();
window.setInterval(clock, 1000);
// setInterval("clock()", 1000); Second alternative for interval.


