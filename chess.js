var size = 16;

for(var i = 1 ; i <= size ; i++){
    var line = "", first = "", second = "";

    if(i % 2 != 0){ first = " "; second = "#";
    }else{ first = "#"; second = " "; }

    for(var j = 1; j <= size ; j++)
        line += j % 2 != 0 ? first : second;

    console.log(line);
}