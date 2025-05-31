

// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


function array(students) {
    let Houses = []
    for (const Student of students) {
        if (Student.length < 6) {
            Houses.push("Gryffindor");
        }
        else if(Student.length < 8){
            Houses.push("Hufflepuff");
        } 
        else if(Student.length < 12 ){
            Houses.push("Ravenclaw");
        } 
        else {
            Houses.push("Slytherin");
        }
    } 
    return(Houses);
}

// let students = ["zubair", "Ali", "shaheer", "huzaifa", "hanzala", "Abdullah", "kaif", "Ali", "Moiz"]
// console.log(array(students));







// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.



function mirror(str) {
    let split = str.split('');
    let reverse = split.reverse();
    let joined = reverse.join('');

    let mirror = str + joined;
    return mirror
}

console.log(mirror ('ashir'));
console.log(mirror ('hanzala'));
console.log(mirror ('ali'));
console.log(mirror ('huzaifa'));
console.log(mirror ('zubair'));

let res = mirror('zubi');
console.log(res);






// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.



function double(arr) {

    let array = [];
    let dblnmbr = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (! dblnmbr.has(arr[i])) {
           array.push(arr[i] * 2);
           dblnmbr.add(arr[i])
        } else {
            array.push(arr[i]);
        }
    }
    return array;
}

let result =(double([1,2,3,3,2,1]))
console.log(result);






// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


function passwordValidator(password){
    let hasuppercase =false;
    let haslowercase =false;
    let hasdigit = false;
    if (password.length < 8){
       return ("Invalid Password!Too short");
    } 
    for (let i = 0; i < password.length; i++) {
        if (password[i]>='a' && password[i]<='z') {
            haslowercase = true;
        } 
        else if(password[i]>='A' && password[i]<='Z'){
            hasuppercase = true;
        } 
        else if (password[i]>=0 && password[i]<=9){
            hasdigit = true;
        }
        if (haslowercase && hasuppercase && hasdigit) {
            break;
        }
    }
        if(! hasuppercase){
        return("Invalid Password: Kam az kam ek bada haroof (uppercase letter) hona chahiye.");
        } if(! haslowercase){
        return ("Invalid Password: Kam az kam ek chhota haroof (lowercase letter) hona chahiye."); 
        } if(! hasdigit){
        return("Invalid Password: Kam az kam ek hinsa (digit) hona chahiye.");
        }  else {
        return ("password is good");
        }
}

console.log(passwordValidator("Optopi#0"))






// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            console.log("please enter valid input")
        } else {
            sum += array[i];    
        }
    }
    return sum;
}

let result1 = sum([1,2,3,4])
console.log(result1);







// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function vowel(str){
    str = str.toUpperCase();

    if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
        console.log(str + "includes a vowel")
    } else {
        console.log(str + " not includes a vowel ")
    }
}

let str = "abdullh";
vowel(str);







// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


async  function coffee(user_coffee){
    console.log("you coffee is in making")

    let dalay = Math.floor(Math.random() * 5000) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
        console.log(`your ${user_coffee} is ready after ${dalay / 1000} seconds`)
    },dalay);

    })
}
    
let user_coffee = "latte";
coffee(user_coffee);