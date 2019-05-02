// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function(array,index){
     if (array === "Waldo") {
      found(index);   // execute callback
    }
  });
}


function actionWhenFound(index) {
  console.log("Found him!" +" index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);