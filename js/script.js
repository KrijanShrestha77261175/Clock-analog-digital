// For second: 1 second === 6 deg --> 60 seconds === 360deg
// For minute: 1 minute === 6 deg --> 60 minutes === 360deg
// For hour:   1 hour === 0.5 deg --> 12 hour =====  360deg

let rotate = () => {
  let hourHand = document.getElementById("hour-hand");
  let minuteHand = document.getElementById("minute-hand");
  let secondHand = document.getElementById("second-hand");

  let rotation = 360;

  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();

  let secondRotate = 6 * seconds;
  let minuteRotate = 6 * minutes;
  let hourRotate = (30 * hours) + minutes * 0.5;
  //

  secondHand.style.transform = `rotate(${secondRotate}deg)`;
  secondHand.style.transformOrigin = "bottom";

  minuteHand.style.transform = `rotate(${minuteRotate}deg)`;
  minuteHand.style.transformOrigin = "bottom";

  hourHand.style.transform = `rotate(${hourRotate}deg)`;
  hourHand.style.transformOrigin = "bottom";

  document.getElementById("digitalHour").textContent=`${hours}`;
  document.getElementById("digitalMin").textContent=`${minutes}`;

  document.getElementById("digitalSec").textContent=`${seconds}`;

if (hours > 12) {
    document.getElementById("am-pm").textContent=`PM`;
}
else {
    document.getElementById("am-pm").textContent=`AM`;

}
 

};

setInterval(rotate, 1000);

  // For Digital //

// let digitalClock = ()=> {
 

//   let digitalH = document.getElementById("digitalHour");
//   let digitalM = document.getElementById("digitalMin");
//   let digitalS = document.getElementById("digitalSec");
//     let date = new Date();

// }
