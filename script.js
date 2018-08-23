//task 1//
const addstrings = (string1 = "hello", string2 = "world");
console.log(`${string1} ${string2}`);

//task 2//
const multiply = (number1 = 1, number2 = 1) => number1 + number2;
console.log(multiply(3));
console.log(multiply(2, 5));

//task 3//

const average = (...args) => {
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
    });
    return (`Średnia podanych liczb wynosi: ${sum / args.length}`);
};

console.log(average(1, 3, 6, 6));
console.log(average(1, 3));
console.log(average(1));

//task 4// 

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

console.log(`Task 4. The average of grades ${grades} is: ${average(...grades)}`);




//Task 5//
const array1 = [1, 4, 'Krystyna', false, 'Nowak'];

const [, , firstName, , lastName] = array1;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);