function func1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done 1");
    }, 3000);
  });
}

function func2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done 2");
    }, 1000);
  });
}

async function executeThis() {
  const res = await func1();
  console.log(res);
}

async function executeThis2() {
  const res2 = await func2();
  console.log(res2);
}
executeThis();
executeThis2();
