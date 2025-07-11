const sum = require('./sum'); //imports function sum from sum.js

// test("adds 2 + 3 to equal 5", () => {
//     expect(sum(2, 3)).toBe(5); 
// });

function addsTwoAndThreeEqualsFive() {
    expect(sum(2, 3)).toBe(5); //what you expect, will be compared to what the test will find
}

test("adds 2 + 3 to equal 5", addsTwoAndThreeEqualsFive)

test("adds -2 + 3 to equal 1", () => {
    expect(sum(-2, 3)).toBe(1);
});

test("adds -2 + -3 to equal -5", () => {
    expect(sum(-2, -3)).toBe(-5);
});

test("adds 0 + 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
});

const value = 12;

test("Value is 10", () => {
    expect(value).toBe(12);
})

test("Strict equality check", () => {
    const result = 2 + 2;
    expect(result).toBe(4);
})


test("deep equality check with objects", ()=> {
    const user = {name: "john", age: 25};
    expect(user).toEqual({name: "john", age: 25});
});

test("deep equality check with arrays", ()=> {
    const numbers = [1, 2, 3, 4];
    expect(numbers).toEqual([1, 2, 3, 4]);
});

// toBeTruthy , if the value is a string with content, expect(value).toBeTruthy will pass
//toBeFalsy, if the value is an empty string, will be falsy or will fail the toBeTruthy test. 
//If value is 0, it will be falsy/ will fail toBeTruthy test. Null and undefined as well.
//no more than 0 is truthy