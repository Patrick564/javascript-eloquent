number = 1;

for (number; number <= 100; number++) {

    if ((number % 3) == 0 && (number % 5) == 0) {
        console.log('FizzBuzz');
        continue;
    } else if ((number % 3) == 0) {
        console.log('Fizz');
        continue;
    } else if ((number % 5) == 0) {
        console.log('Buzz');
        continue;
    }

    console.log(number);
}

/*
Book solution.

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

*/
