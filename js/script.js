const clockRotation = () => {
  const date = new Date();
  const currHour = date.getHours();
  const currMinute = date.getMinutes();
  const currSecond = date.getSeconds();
  const secondRotate = currSecond * 6;
  const minuteRotate = currMinute * 6;
  const hourRotate = currHour * 30 + currMinute * 0.5;
  $("#second").css({
    transform: `rotate(${secondRotate}deg)`,
    transformOrigin: "bottom",
  });
  $("#minute").css({
    transform: `rotate(${minuteRotate}deg)`,
    transformOrigin: "bottom",
  });
  $("#hour").css({
    transform: `rotate(${hourRotate}deg)`,
    transformOrigin: "bottom",
  });
};

setInterval(clockRotation, 1000);
