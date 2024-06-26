// question 1.......
function canVote (age) {
    if(age >= 18){
return("you are eligible to vote");
    } else{
        return("you are not eligible to vote");
    }
}
const value =prompt("enter an age");
const age= (value);
if (age) {
    const result = canVote(age);
    console.log(result);
    alert(result);
} else {
    console.log("please enter a valid age");
    alert("please enter a valid age");
}





// question 2.....
// function maxOfTwo (a, b) {
//     if(a>b){
//         return("a");
//     } else{
//         return("b");
//     }
// }
// maxOfTwo.js

function maxOfTwo(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
    }
    
  // Test the function
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    
    const result = maxOfTwo(Number(num1), Number(num2));
    alert(`The larger number is: ${result}`);




// question 3.......
function isEvenOrOdd (number) {
    if(number % 2 === 0){
        return("the number is even");
    } else{
        return(" the number is odd");
    }
}
const input =prompt("enter a number");
const num = (input);
if (num) {
    const result = isEvenOrOdd(num);
    console.log(result);
    alert(result);
} else {
    console.log("please enter a valid integer");
    alert("please enter a valid integer");
}



// question 4......
function getGrade (score){
    if(score >= 90 && score <= 100){
        return("grade A");
    } else if(score >= 80 && score <= 89){
        return("grade B")
    } else if(score >= 70 && score <= 79){
    return("grade C")
    } else if(score >= 60 && score <= 69){
    return("grade D")
    } else if(score >= 0 && score <= 59){
    return("grade F")
    }
}
const data =prompt("enter marks");
const marks = (data);
if (marks) {
    const result = getGrade(marks);
    console.log(result);
    alert(result);
} else {
    console.log("please enter a valid marks");
    alert("please enter a valid marks");
}


// question 5.....
function greet(name) {
    return `Hello world, ${name}!`;
}
let name = prompt("please enter your name");
console.log(greet(name));
if (name){
    const result = greet(name);
    console.log(result);
    alert(result);
}


// question 6.........
function square (number) {
    return number*number;
}
let number = prompt("please enter a number");
console.log(square(number));
if (number){
    const result = square(number);
    console.log(result);
    alert(result);
} else {
    console.log("please enter a valid number");
    alert("please enter a valid number");
}



// question 7..........
function celsiusToFahrenheit (celsius){
    return celsius * 9/5 + 32 ;
}
const temp =prompt("enter temperature");
const celsius= (temp);
if (temp) {
    const result = celsiusToFahrenheit(temp);
    console.log(result);
    alert(result);
} else {
    console.log("please enter a valid temp");
    alert("please enter a valid temp");
}



// question 8...........
function  isPositive (number){
    if (number > 0){
        return("true");
    } else if (number < 0){
        return("false");
    }
}
    const digit =prompt("enter digits");
    const Positive= (digit);
    if (digit) {
    const result = isPositive(digit);
    console.log(result);
    alert(result);
    } else {
    console.log("please enter valid digits");
    alert("please enter valid digits");
    }



    // question 9...........
    let patient = {
        Name:"albert",
        age:40,
        gender:"male",
        phoneNumber:"0300-734-7568" ,
        Medicalhistory:["Allergy", "constipation" , "diabetes", "hypertension"]
    }
    console.log(patient.Name);
    console.log(patient.age);
    console.log(patient.Medicalhistory);



    // question 10.........
    let student = {
        Name:"Rameen",
        gender:"female",
        degree:"BSC",
        Year:"1st",
        subjects:["biochemistry", "english", "history", "psycology"]
    }
    console.log(student.Name);
    console.log(student.Year);
    console.log(student.degree);
    console.log(student.gender);
    console.log(student.subjects);