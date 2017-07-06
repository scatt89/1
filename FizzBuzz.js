for(var i = 1; i <= 100; i++){
    var toPrint = i + "- ";
    if(i % 3 == 0) toPrint += "Fizz";
    if(i % 5 == 0) toPrint += "Buzz";
    console.log(toPrint);
}

