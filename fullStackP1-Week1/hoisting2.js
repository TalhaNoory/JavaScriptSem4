function hoisting2() {
    f1();
    f2();

    //fungere!
    function f1() {
        console.log("I'm f1");
    }
    //fungere ikke!
    //'var f2' bliver hoistet
    var f2 = function() {
        console.log("Yes, but I'm f2");
    };
}

hoisting2();