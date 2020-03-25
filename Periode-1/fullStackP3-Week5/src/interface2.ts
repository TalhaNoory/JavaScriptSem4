interface myFunc {
    
        firstName: string, 
        lastName: string, 
        addresse: string,
        [threeStrings: number]: {id: number; label: string; key: any}
}

const func = {firstName: "Talha", lastName:"Ahmad", addresse:"SpørgDigSelv"}

function returnArray(func: myFunc) {
    console.log
}

returnArray(func)