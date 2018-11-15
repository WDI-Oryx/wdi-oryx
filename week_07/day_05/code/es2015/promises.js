const p = new Promise(function(resolve, reject) {
  if (Math.random() < 0.5) {
    resolve("success");
  } else {
    reject("THIS IS AN ERROR MESSAGE");
  }
});

p.then(function(data) {
  console.log("THIS WORKED", data);
});

p.catch(function(err) {
  console.error("Something went wrong", err);
});

const delay = new Promise(function(resolve) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

delay.then(function() {
  console.log("waited a second");
});
