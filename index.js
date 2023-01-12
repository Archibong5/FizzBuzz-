var output = []
var output2 = []
var output3 = []
var output4 = []
var output5 = []


document.querySelector(".btn").addEventListener("click", function(){
  // var buttonInnerHTML = this.innerHTML;
  // fizzBuzz(buttonInnerHTML)
document.querySelector(".answer").innerHTML = fizzBuzz()
document.querySelector(".answer2").innerHTML = fizzBuzz2()
document.querySelector(".answer3").innerHTML = fizzBuzz3()
document.querySelector(".answer4").innerHTML = fizzBuzz4()
document.querySelector(".answer5").innerHTML = fizzBuzz5()


})


function fizzBuzz(){
  for (var count = 1; count <= 20; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output.push("Fizz")
    } else if (count % 5 === 0){
      output.push("Buzz")
    } else {
      output.push(count)
    }
  }
  return output;
}



function fizzBuzz2(){
  for (var count = 21; count <= 40; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output2.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output2.push("Fizz")
    } else if (count % 5 === 0){
      output2.push("Buzz")
    } else {
      output2.push(count)
    }
  }
  return output2;
}



function fizzBuzz3(){
  for (var count = 41; count <= 60; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output3.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output3.push("Fizz")
    } else if (count % 5 === 0){
      output3.push("Buzz")
    } else {
      output3.push(count)
    }
  }
  return output3;
}



function fizzBuzz4(){
  for (var count = 61; count <= 80; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output4.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output4.push("Fizz")
    } else if (count % 5 === 0){
      output4.push("Buzz")
    } else {
      output4.push(count)
    }
  }
  return output4;
}


function fizzBuzz5(){
  for (var count = 81; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output5.push("FizzBuzz")
    } else if (count % 3 === 0) {
      output5.push("Fizz")
    } else if (count % 5 === 0){
      output5.push("Buzz")
    } else {
      output5.push(count)
    }
  }
  return output5;
}
