//let st1 = prompt("Nhap tong:")
//let st2 = prompt("Nhap so kinh:")

//st1 = Number(st1)
//st2 = Number(st2)

//let ketqua = (st2/st1)*100

//console.log(ketqua)

// let soLan = prompt("Nhap so lan")
// for (let x = 1; x < soLan; x++){
//     console.log(`Hello ${soLan} abcd`)
// }


// Bài tập: 
// Người dùng nhập vào một tháng trong năm, từ 1 đến 12, 
// hiện ra mùa của tháng này, xuân, hạ, thu hay đông
// Kiểm tra số âm hoặc ký tự

//cach1
// let flat = false
// while (flat != true){
//     let thang = prompt("Nhap thang:")
//     if (0<thang && thang<13){
//         flat = true
//     }
// }

//cach2
//NaN Not a number
// let thang = 0
// let check = NaN

// while (1>thang || thang>12 || isNaN(check)){
//     thang = prompt("Nhap thang")
//     check = thang - 1 
//     console.log (check) 
// }

// let flag = false
// while (flag != true){
//     let a,b,c
//     while (isNaN(1-a)){
//         a = prompt ("Nhap a:")
//     }
//     while (isNaN(1-b)){
//         b = prompt ("Nhap b:")
//     }
//     while (isNaN(1-c)){
//         c = prompt ("Nhap c:")
//     }
//     flag = true
// }






// Bài tập: Giả lập 1 phiên đăng nhập, người dùng nhập username & password, 
// chỉ đúng khi username là mindx, password là codethechange
// Nếu username sai, báo sai username
// Nếu username đúng, password sai, báo sai password
// Nếu username đúng, password đúng, báo đăng nhập thành công
// - Sử dụng while để người dùng nhập đến khi đúng.  
// nhắc lại cấu trúc:
// while(true){
//     stm1;
//     stm2;
//     ...
// }

// while (userName != "mindx" && passWord != "codethechange"){
//     if (userName != "mindx"){
//         console
//     }
// }


// let n = Number(prompt("Nhap"))
// if (n){
//     console.log("dung")
// } else{
//     console.log("sai")
// }


// let n = prompt("Nhap n") //6
// let ketqua = ""
// for (let i = 0; i <= n-1; i++){
//     ketqua += "*"
//     console.log(ketqua)
// }


let n = prompt("Nhap n:")
let count = 0
for (let i = 2; i<=n; i++){
    //Nếu i là so NT thi in ra
    //console.log(i)
    for (let j = 2; j<=i-1;j++){
        if (i%j == 0){
            count++
        }
    }
    if (count==0){
        console.log(i)
        count = 0;
    }else count = 0;
    
}


// //Init
// dfgfasdfasdfasdfasd


//Create
