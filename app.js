// QUESTION 1 - To make sure what is returned is not ‘null’
// Function 
let notNull = (num1) => {
    // If Else Statement 
    if (num1 != null) {
        return num1 
    } else {
        return null
    }
}

// QUESTION 2 - A value that is truthy
// Function 
let truthyValue = (num2) => {
    // If Statement 
    if ((2 + 2) === num2) {
        return true; 
    }
} 

// QUESTION 3 - A value that is not falsy
// Function 
let falsyValue = (num3) => {
    // If Statement 
    if ((2 + 2) !== num3) {
        return false; 
    }
} 

// QUESTION 4 - Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function
let testTwoProperties = () => {
    const cafe = {
        name: "Mag's Coffee", 
        location: "Liverpool"
    } 
    return cafe;
}

// QUESTION 5 - A function that will return items in an array with 6 or more characters
// sixOrMoreChar(['123456','123456','123456','3'])
let sixOrMoreChar = (arrayItems) => {
    //let arrayItems = ['123456','123456','123456','3'];
    let returnArray = [];
    for (let i = 0; i < arrayItems.length; i++){
        if(arrayItems[i].length <= 6) {
            returnArray.push(arrayItems[i])
        }
    }
    return returnArray;
}

// QUESTION 6 - convert a number to a string
let numberToString = (numberChar) => {
    //let numberChar = 4;
    return numberChar.toString();
}

// QUESTION 7 - Display the correct planet with the number order it is away from the sun
let planetNum = (planetArray) => {
    let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune'];
    return planets [planetArray - 1]
}
// QUESTION 8 - Count the amount of students present in the class. With an array or boolean values, count how many students are present (true = present)
let presentinClass = (studentList) => {
    // let studentList = [true, true, true, false, true];
    let studentsPresent = 0;
    for (let i = 0; i<studentList.length; i++){
        if(studentList[i] == true){
            studentsPresent++;
        }
    }
    return studentsPresent;
}

module.exports = {
    notNull, 
    truthyValue, 
    falsyValue,
    testTwoProperties
}
