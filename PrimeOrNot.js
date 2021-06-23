const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let isPrime=true;
  readline.question('Enter Number :', n => {
    if (n == 1) {
        console.log("1 is neither prime nor composite number.")
    }
    else if(n>1)
    {
        for (let i = 2; i<n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }   
    }
    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }

readline.close();
  });
