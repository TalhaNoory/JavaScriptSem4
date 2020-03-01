function hoisting1() {
    console.log("Value of myCoolObject: " + myCoolObject);

    if (!myCoolObject) {
        const myCoolObject = {value: "Wau I'm cool"};
        console.log(myCoolObject.value)
    }
}

hoisting1();

/*
1.
linje 5  'var myCoolObject' bliver
erklæringen skubbet ind
mellem linje 1 og 2 hvilket også kaldes hoisting.
kun erklæringen bliver skubbet ind, 
ikke '{value: "Wau I'm cool"}' den bliver først
kørt når vi når til den.
2.
Hvis man ændrer variablen fra 'var' til 'let'
så bliver variablen først erklæret i dette punkt

                    {
        let myCoolObject = {value: "Wau I'm cool"};
        console.log(myCoolObject.value)
    }

Det er også her vi får vores fejl

*/