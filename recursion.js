function isEven(n){
    function evenees(n) {
        if (n < 2)return n;
        return evenees(n - 2);
    }
    return evenees(Math.abs(n)) == 0;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));