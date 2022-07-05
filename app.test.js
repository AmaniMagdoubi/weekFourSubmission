const {notNull} = require("./app.js");
const {truthyValue} = require("./app.js"); 
const {falsyValue} = require("./app.js"); 
const {testTwoProperties} = require("./app.js"); 

// Question 1 
test("checking not null", () => {
    // not null 
    expect(notNull(3)).not.toBe(null); 
}); 

// Question 2 
test("checking value is true", () => {
    expect(truthyValue(4)).toBeTruthy(); 
})

// Question 3 
test("checking value is false", () => {
    expect(falsyValue(22)).toBeFalsy(); 
})

// Question 4 
test("checking that 2 properties match", () => {
    let objectTest = testTwoProperties()
      expect(objectTest).toEqual(
        expect.objectContaining({
            name: "Mag's Coffee",
            location: "Liverpool"
        })
      );
})

// Question 5 

// describe("chesking array retunrs only the vlaues with 6 or more characters", () => {
//     let expected = ['Alice', 'Bob'];
//     it('matches even if received contains additional elements', () => {
//       expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//     });
