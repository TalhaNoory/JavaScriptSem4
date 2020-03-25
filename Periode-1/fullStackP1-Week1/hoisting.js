function hoisting() {
    const a = false;
    if(a) {
        var hasBeenInA = true;
        console.log("In A")
    }
    if(hasBeenInA) {
        console.log("In B")
    }
}

hoisting();

/* 
Når man erklærer en variable, så lever den inde
i den blok hvor den er blevet erklæret.
Det gælder ikke i javaScript, når man erklærer
noget med var. 
*/