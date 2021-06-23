const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var day="";
  readline.question('Enter Number :', n => {
    let i=1;
    let POWER=1;
    console.log(`The Value Of 2 * 0 =`, POWER);
    while (i<=n)
    {
    POWER=2*POWER;
    console.log(`The Value Of 2 * ${i} =`, POWER);
    i++;
    }
    readline.close();
});