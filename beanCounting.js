function countBs(sentence){
    var bCounter = 0;
    for(var i = 0; i < sentence.length; i++){
        if(sentence.charAt(i) == 'b' || sentence.charAt(i) == 'B') bCounter++;
    }
    return bCounter;
}

console.log(countBs("En esta sentencia hay una b"));
console.log(countBs("En esta sentencia hay dos bb"));
console.log(countBs("En esta sentencia hay cero"));

//Refactorizado para aceptar la letra que hay que contar y la frase

function countChar(char, sentence) {
    var charCounter = 0;
    for(var i = 0; i < sentence.length; i++){
        if(sentence.charAt(i) == char) charCounter++;
    }
    return charCounter;
}

console.log(countChar("b", "En esta sentencia hay una b"));
console.log(countChar("a", "En esta sentencia hay cuatro a"));
console.log(countChar("z", "En esta sentencia hay cero"));