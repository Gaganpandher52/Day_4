var arr = ["ground", "control", "to", "major", "tom"];

function ownMap(input, call){
  var doSomething = [];
  for(var i = 0;i < input.length;i++){

    doSomething.push(
      call(input[i], i, input)
    );
  }//for
  return doSomething;
}

function callMe(input) {
  return input.length;
}


console.log(ownMap(arr,function callMe(input) {
  return input.length;
}))
console.log(ownMap(arr,function callMe(input) {
  return input.toUpperCase();
}))
console.log(ownMap(arr,function callMe(input) {
  return input.split('').reverse().join('');
}))





