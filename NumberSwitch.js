const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var text="";
  readline.question('Enter Number :', number => {
    
    switch(number){
        case "0":
            text='Zero';
            break;
        case "1":
            text='One';
            break;
        case "2":
            text='Two';
            break;
        case "3":
            text='Three';
            break;
        case "4":
            text='Four';
            break;
        case "5":
            text='Five';
        case "6":
            text='Six';
            break;
        case "7":
            text='Seven';
            break;
        case "8":
            text='Eight';
            break;
        case "9":
            text='Nine';
        default:
            text='Invalid';
    }
    console.log(text);
    readline.close();
});
