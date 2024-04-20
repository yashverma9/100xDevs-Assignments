function myOwnTimeoutFunc(counter) {
  setTimeout(() => {
    counter += 1;
    console.log("count:", counter);
    if (counter < 20) myOwnTimeoutFunc(counter);
    else console.log("END");
  }, 1000);
}

myOwnTimeoutFunc(0);
