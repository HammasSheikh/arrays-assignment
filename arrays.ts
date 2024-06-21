/*question#1:
Create an array named fruit that contains the following string elements:
"apple","banana","mango","orange".*/

let fruits:string[] = ["apple","banana","mango","orange"];
console.log(fruits);

/*question#2:
Declare an array named numbers that contain only number elements and initialize
it with values 10, 20 ,30 ,40 */ 

let numbers:number[] = [10,20,30,40];
console.log(numbers);

/*question#3:
Access the third element of the fruits array and assign it to a variable 
named thirdFruit */

fruits = ["apple","banana","mango","orange"];
let thirdFruit:string = fruits[2];
console.log(thirdFruit);

/*question#4:
change the second element of the number 25*/

numbers.splice(1,1,25);
console.log(numbers);

/*question#5:
add the element "grape" to the end of the fruits array using the method*/

fruits.push("grape");
console.log(fruits)


/*question#6:
Remove the last element of the fruits array using the method and assign it to
a variable named lastFruit*/

let lastFruit = fruits.splice(4,1)[0];
console.log(lastFruit)
console.log(fruits)

/*question#7:
remove the first element from the fruits array using the method and assign it to 
a variable named firstfruit*/

let firstFruit = fruits.splice(0,1)[0]
console.log(firstFruit);
console.log(fruits);

/*question#8:
add an element "kiwi" to the beginning of the fruits array using the method*/

fruits.unshift("kiwi");
console.log(fruits)

/*question#9:
Remove 2 elements from the fruits array starting from index 1 using the method*/

fruits.splice(1,2);
console.log(fruits)

/*question#10:
insert the elements "pineapple" and "pear" at index 2 of the fruits
 array using the method*/

 fruits.splice(2,0,"pineapple","pear");
 console.log(fruits)

 /* question # 11
  create a new array named "citrusFruits" that contains the first two elements
 of the fruits array using the method*/

 let citrusFruits = fruits.slice(0,2)
 console.log(citrusFruits)

 /* question#12
  create a new array named lastTwoFruits that contains the last two elements
  of the fruits array using the method*/

 let lastTwoFruits = fruits.slice(2,4);
 console.log(lastTwoFruits)





