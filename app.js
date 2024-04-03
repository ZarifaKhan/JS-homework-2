//Write a function printNumbers that takes an integer n as input and prints all the numbers from 1 to n using a for loop.

//For Loop
function printNumber(n) {
  for (let i = 1; i < n; i++) {
    console.log(i);
  }
}

printNumber(8);

// for ... of
function sumArray(arr) {
  let sum = 0;
  for (const value of arr) {
    sum += value;
  }
  return sum;
}

console.log(sumArray([9, 4, 2, 15, 96, 400, 32]));

// if ...else

function evenOrOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(`Array ${i} element: ${arr[i]} - is even`);
    } else {
      console.log(`Array ${i} element: ${arr[i]} -is odd`);
    }
  }
}

evenOrOdd([78, 20, 45, 6, 1, 75, 91, 41, 22]);

//ternary

function getSign(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0
      ? console.log(`${arr[i]} is postive`)
      : console.log(`${arr[i]} is neagtive`);
  }
}

getSign([-5, 6, 52, -1, 0, 66, -25]);

//while loop
let addStr=[]
function reverseString(str){
    // let addStr=[]
    let strLength = str.length-1
    while(strLength>=0){
    addStr.push(str[strLength])
        strLength--
    }
    return addStr

}
console.log(reverseString('JavaScript'))
// console.log(addStr)


//switch case
function dayOfWeek(day) {
  switch (day) {
    case 1:
      console.log(`Today Monday`);
      break;
    case 2:
      console.log(`Today Tuesday`);
      break;
    case 3:
      console.log(`Today Wednesday`);
      break;
    case 4:
      console.log(`Today Thursday`);
      break;
    case 5:
      console.log(`Today Friday`);
      break;
    case 6:
      console.log(`Today Saturday`);
      break;
    case 7:
      console.log(`Today Sunday`);
      break;
  }
}

dayOfWeek(5);


// Function Context
const object = {
  firstNumber: 100,
  secondNumber: 20,

  add: function () {
    return this.firstNumber + this.secondNumber;
  },

  substract: function () {
    return this.firstNumber - this.secondNumber;
  },
  multiple: function () {
    return this.firstNumber * this.secondNumber;
  },
  divide: function () {
    return this.firstNumber / this.secondNumber;
  },
};

console.log(object.substract());

//closure

function outerFunc(a) {
  let b = a + 10;

  function innerFunc() {
    return a+ b
  }
  return innerFunc
}

let closure = outerFunc(9)
console.log(closure())