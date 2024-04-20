let counter = 0;

function doCount() {
  counter += 1;
  console.log("counter: ", counter);
}

let intervalId = setInterval(doCount, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

console.log("Hi:", 1);
