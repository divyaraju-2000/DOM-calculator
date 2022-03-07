
document.addEventListener("DOMContentLoaded", function() {

  var buttonNum = document.getElementsByClassName('number');
  var operator = document.getElementsByClassName('operator');
  var buttonClear = document.getElementsByClassName('buttonClear');
  var equals = document.getElementsByClassName('equals');
  var thescreen = document.getElementById('screen');
  var num1 = 0;
  var num2 = 0;
  var add = false;
  var sub = false;
  var multi = false;
  var div = false;
  var calculation = 0;

buttonNum[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "7";
    if (num1 == 0) {
      num1 = 7;
    } else {
      num2 = 7;
    }

  });

  buttonNum[1].addEventListener('click' , function(event){
    thescreen.innerHTML = "8";
    if (num1 == 0) {
      num1 = 8;
    } else {
      num2 = 8;
    }

  });

  buttonNum[2].addEventListener('click' , function(event){
    thescreen.innerHTML = "9";
    if (num1 == 0) {
      num1 = 9;
    } else {
      num2 = 9;
    }

  });
  buttonNum[3].addEventListener('click' , function(event){
    thescreen.innerHTML = "4";
    if (num1 == 0) {
      num1 = 4;
    } else {
      num2 = 4;
    }

  });
  buttonNum[4].addEventListener('click' , function(event){
    thescreen.innerHTML = "5";
    if (num1 == 0) {
      num1 = 5;
    } else {
      num2 = 5;
    }

  });
  buttonNum[5].addEventListener('click' , function(event){
    thescreen.innerHTML = "6";
    if (num1 == 0) {
      num1 = 6;
    } else {
      num2 = 6;
    }

  });
  buttonNum[6].addEventListener('click' , function(event){
    thescreen.innerHTML = "1";
    if (num1 == 0) {
      num1 = 1;
    } else {
      num2 = 1;
    }

  });
  buttonNum[7].addEventListener('click' , function(event){
    thescreen.innerHTML = "2";
    if (num1 == 0) {
      num1 = 2;
    } else {
      num2 = 2;
    }

  });
  buttonNum[8].addEventListener('click' , function(event){
    thescreen.innerHTML = "3";
    if (num1 == 0) {
      num1 = 3;
    } else {
      num2 = 3;
    }

  });


  operator[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "*";
    multi = true;
  });

  operator[1].addEventListener('click' , function(event){
    thescreen.innerHTML = "/";
    div = true;
  });

  operator[2].addEventListener('click' , function(event){
    thescreen.innerHTML = "-";
    sub = true;

  });

  operator[3].addEventListener('click' , function(event){
    thescreen.innerHTML = "+";
    add = true;

  });

  buttonClear[0].addEventListener('click' , function(event){
    thescreen.innerHTML = "";
    num1 = 0;
    num2 = 0;
    add = false;
    sub = false;
    div = false;
    multi = false;

  });

  equals[0].addEventListener('click' , function(event){
    if (add == true) {
      calculation = num1 + num2;
    } else if (sub == true) {
      calculation = num1 - num2;
    } else if (div == true) {
      calculation = num1 / num2;
    } else if (multi == true) {
      calculation = num1 * num2;
    }
    thescreen.innerHTML = (calculation);
    num1 = 0;
    num2 = 0;
    add = false;
    sub = false;
    div = false;
    multi = false;
  });
});
