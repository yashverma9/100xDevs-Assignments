let currentTime = new Date();

function incrementTime() {
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  if (seconds < 59) seconds += 1;
  else {
    seconds = 0;
    if (minutes < 59) minutes += 1;
    else {
      minutes = 0;
      if (hours < 23) hours += 1;
      else hours = 0;
    }
  }

  console.log(`Time: ${hours}:${minutes}:${seconds}`);

  currentTime.setSeconds(seconds);
  currentTime.setMinutes(minutes);
  currentTime.setHours(hours);
}

setInterval(() => {
  const timeNow = incrementTime(currentTime);
}, 1000);
