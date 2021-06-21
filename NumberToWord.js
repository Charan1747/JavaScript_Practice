
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
    let ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    readline.question('Enter A Single digit Number :', num => {
        if(num<10){
            console.log(`Given Number is ${num} in Words `+ones[num]);
        }
        else {
            console.log("Invalid Number");
        }
    readline.close();
  });


