// function xinChao (){
//     console.log("Hello")
// }

//let input = prompt("Xin hãy nhập tên:")
// function tinhTong(num1,num2){
//     console.log(num1+num2)
// }

// let so1 = prompt("so thu 1")
// let so2 = prompt("so thu 2")

// tinhTong(so1,so2)

//xinChao()


//BT Function

// let movie = {
//         title:"The dark night rises",
//         year: 2012,
//         rate: 8.4
//     }

// // function read(){
// //     for (let x in movie){
// //         console.log(movie[x])
// //     }
// // } 
// // read()

// //Update
// function update(properties, text){
//     //Code
// }

// update(inputProperties, inputText)


// function read(properties){
//     //code của mng
// }

// let input = prompt("Nhập thứ bạn muốn xem")
// read(input)




//Giới thiệu về Hàm
//BT: 

// setTimeout(function(){
//     console.log("Đã pha xong cafe")
// },3000)

// function makeCoffee(callback){
//     setTimeout(function(){
//         console.log("Đã pha xong cafe")
//         callback()
//     },3000)
// }
// //10p thì nó mới xong

// function shipCoffee(){
//     console.log("Đang ship" )
// }

// makeCoffee(shipCoffee)


// let myflock = [5,7,300,90,24,50,75]

// function read(flocks){
//     let res = " "
//     for(i=0; i<flocks.length; i++) res = res + flocks[i] + " "
//     console.log("Đàn cừu của tôi: \n" + res)
// }

// function catLong(flocks){
//     let max = 0;
//     for(i=0; i<flocks.length; i++){
//         if (max < flocks[i]) max = flocks[i]
//     }
//     flocks[flocks.indexOf(max)] = 8
//     read(flocks)
// }

// function growUp(flocks){
//     for(i=0; i<flocks.length; i++){
//         flocks[i]=flocks[i]+50
//     }
//     read(flocks)
// }

// function main (){
//     read(myflock)
//     setInterval(function(){
//         catLong(myflock)
//         setInterval(function(){
//             growUp(myflock)
//         },1000)
//     },5000)
// }

// main()





















//Callback
//gth về hàm setTimeout


// function hocBai(noLaBienKiemTra){
//     setTimeout(function(){
//         console.log("Đã học bài xong")
//         noLaBienKiemTra()
//     },5000)
// }

// function diNgu(){
//     console.log("Đi ngủ")
// }

// hocBai(diNgu)



// function makeCoffee(onFinish){
//     let productInCoffee = "Coffee"
//     console.log("Đã làm xong!")
//     onFinish(productInCoffee)
// }

// function shipCoffee(product){
//     console.log("Đang ship " + product)
// }

// makeCoffee(shipCoffee)
//? vậy gắn bằng biến có chạy không?
//3 kiểu thể hiện: biến, tên hàm, hàm trực tiếp

//BT Callback: 

// let input = prompt("Bạn muốn ăn gì")

// function cheBien(onFinish,req){
//     setTimeout(function(){
//         console.log("Đã chế biến xong "+req)
//         onFinish(req)
//     },5000)
// }

// function giaoHang(monAn){
//     console.log("Đang ship món " + monAn)
// }

// cheBien(giaoHang,input)

/*----------------------------------------------------------------*/ 
/*---------DOM------------*/

// let a = document.getElementById("xin_chao")
// console.log(a.textContent)

// let b = document.getElementsByClassName("container")
// //b[1].style.display = "none"
// console.log(b[1])

// a.textContent = "Hiếu nè"
// a.addEventListener('click',function(){
//     a.style.backgroundColor = "red"
// })

// a.insertAdjacentHTML('beforeend',
//     '<div>Cool</div>'
// )


//BT
//Buttom click
// function decrease(operator){
//     let num = Number(document.getElementById("number").textContent)
//     num = num + operator
//     document.getElementById("number").textContent = num
// }

//Timer stop

function start(){
    let input = document.getElementById("input").value
    var x = setInterval(function(){
        document.getElementById("timer").textContent = input
        input--
    },1000)
    function stop(){
        clearInterval(x)
    }
}


var input = 0
function start(){
    var input = document.getElementById("input").value
    window.time = setInterval(function(){
        document.getElementById("timer").innerHTML = input
        input--
        if (input < 0) clearInterval(time)
    },1000)  
}

function stop(){
    clearInterval(window.time)
}





/*------------------------*/
//Turn on _ Turn off
// function lightOn(){
//     document.getElementById("bulb").src = "./ONbulb.jpg"
// }

// function lightOff(){
//     document.getElementById("bulb").src = "./OFFbulb.jpg"
// }




//Caculator
// window.number1 = 0
// window.operator = ''
// window.number2 = 0
// window.result = 0
// window.input = ''

// function getValue(buttomClick){
//     if (buttomClick == "c"){
//         document.getElementById("result").innerHTML = 0
//         window.input = ''
//         window.operator = ''
//         window.result = 0
//     }else if (buttomClick == "+"){
//         window.input=''
//         result = result + Number(document.getElementById("result").innerHTML)
//         document.getElementById("operator").innerHTML = buttomClick
//         document.getElementById("result").innerHTML = result
//     }else if (buttomClick == "-"){
//         window.input=''
//         result = result - Number(document.getElementById("result").innerHTML)
//         document.getElementById("operator").innerHTML = buttomClick
//         document.getElementById("result").innerHTML = result
//     }else{
//         window.input = window.input + buttomClick 
//         document.getElementById("result").innerHTML = input
//         console.log(input)
//     }
// }

