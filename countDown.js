var countdownGenerator = function (x) {




  if(x == 0){
    return "Blast Off!";
  }
  if(x == -1){
    return "Rockets already gone, bub!"
  }
  if(x == -2){
    return "Rockets already gone, bub!"
  }

  return "T-minus" + x--;



  /* your code here */
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!