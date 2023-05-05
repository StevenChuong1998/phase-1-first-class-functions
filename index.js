function Monday () {
  routine(lift);
}

function Tuesday() {
  routine(swim);
}

function Wednesday() {
  routine(run);
}
  
function Thursday() {
  routine(lift);
}
  
function Friday() {
  routine(swim);
}

function run() {
  console.log("Go for a five-mile run");
}
function swim() {
  console.log("Swim 40 laps");
}
function lift() {
  console.log("Pump iron");
}
function routine(extraExercise){
  run()
  extraExercise()
}

function receivesAFunction (callback) {
  callback()
}

function returnsANamedFunction() {
  return function named() {
    return 1
}
}

function returnsAnAnonymousFunction() {
  return function() {
  return 1 
}
}