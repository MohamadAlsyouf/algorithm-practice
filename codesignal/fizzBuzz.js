// The function accepts an integer n as a parameter
// loop over the numbers from 1 up to n,
// if the current iteration is divisible by 15,
//   console log "FizzBuzz"
// if the current iteration is divisible by 3,
//   console log "Fizz"
// if the current iteration is divisible by 5,
//   console log "Buzz"
// else
//   console log the current iteration value

function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
