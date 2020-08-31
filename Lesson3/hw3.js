//1.Variable swap
// let a = 5;
// let b = 6;
// let temp 
// Huỷ cấu trúc - Destructuring
//[a, b] = [b, a];

//Thuộc tính mảng
//a =[b, b = a][0]

//Biến phụ
// temp = a;
// a = b;
// b = temp;

//Thuật toán đổi số
// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a)
// console.log(b)
//-----------------------------
//2. Split String into Array
// Using type conversion from String to Array

// const s = "Hello beauty there";
// const a = s.split(" ");
// console.log(a); 

//-----------------------------
//3 In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
// const a = [4, 5, 7, -8];
// console.log(...a);

//-----------------------------
//4 Write a script to simulate a clothes shop, asking and performing certain tasks from users
// CRUD

// let shop=["Jeans","T-Shirt","Socks"]
// let method = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
// while (true){
//     if (method == "c"){ //create method
//         let creat_Item = prompt("Enter the name of the new item:")
//         shop.push(creat_Item)
//         alert("Done")
//     }
//     else if (method == "r"){ //read method
//         let result = "" 
//         for (let i = 0; i < shop.length; i++){
//             result = result + (i+1 + ". " + shop[i] + "\n")
//         }
//         alert ("The curent item are: \n" + result)
//     }
//     else if (method == "u"){
//         let position_Update = Number(prompt("Enter the position you want to update"))
//         let newName_Update = prompt("Enter the new name:")
//         shop[position_Update - 1] = newName_Update
//         alert("Done")
//     }
//     else if (method == "d"){
//         let position_Delete = Number(prompt("Enter the position you want to delete"))
//         shop.splice(position_Delete-1,1)
//         alert("Done")
//     }
//     else {
//         alert("This command is not supported")
//     }
//     method = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
// }

//----------------------
// 5.Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
// 6.Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
// let day_so = prompt("Nhap day so:")
// day_so = day_so.split(",")
// console.log(day_so)
// let sum = 0 
// for(let i=0 ; i<day_so.length ; i++){
//     sum = sum + Number(day_so[i])
// }
// alert("The sum of them is " + sum)

//----------------------
//7. Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let count = 0
// let check_number = Number(prompt("Enter a number"))
// for (let i = 0; i <= arr.length; i++){
//     if (check_number == arr[i]){
//         alert(check_number + " is FOUND in my array at index " + (i+1))
//         count++
//     }
// }
// if (count==0) { 
//     alert("No Found")
// }



//----------------------
// 7. You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes: 5 7 300 90 24 50 75
// Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
// 5 7 300 90 24 50 75
// At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// Hint: Google ‘JS Array find max’
// When your biggest sheer, its size will return to the default size, which is 8.
// Hint: Google ‘JS Array indexOf
// In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
// Let’s do this for 4 months (or as long as you want)
// After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:

// let my_flock = [5,7,300,90,24,50,75]
// let result = ""
// let max_size = 0
// for (let i = 0; i<my_flock.length; i++){
//     result = result + my_flock[i] + " "
//     if (max_size<my_flock[i]) max_size = my_flock[i]
// }
// alert ("Hello, my name is Hieu and here is my sheep size: \n" + result)
// alert ("Now my biggest sheep has size " + max_size + ", let's shave it")

// my_flock[my_flock.indexOf(max_size)] = 8
// result = 0
// for (let i = 0; i<my_flock.length; i++){
//     result = result + my_flock[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// result = 0
// for (let i = 0; i<my_flock.length; i++){
//     my_flock[i] += 50
//     result = result + my_flock[i] + " "
// }
// alert ("After shearing, here is my flock \n" + result)

// for (let month=1;month<=4; month++){
//     //coding here
// }


//10 
// let names = prompt ("Enter a sequence of names:")
// names = names.split(",")
// console.log(names)
//10.1
// for (let i = 0; i < names.length; i++){
//     names[i] = "<" + names[i] + ">" 
// }
// console.log(names)
//10.2
// let result = names.map(x =>"<" + x + ">")
// console.log(result)

//11
let array = prompt("Nhap day so:")
array = array.split(",")
//11.1
// let result = []
// let count = 0
// for (let i = 0 ; i < array.length ; i++){
//     if (array[i]%2 != 0){
//         result[count]=array[i]
//         count++
//     }
// }
// alert(result)
//11.2
// array = array.filter( x => x%2!=0)
// alert(array)


