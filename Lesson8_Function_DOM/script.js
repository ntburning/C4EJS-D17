//let input = document.getElementById("text").textContent
// let input2 = document.getElementsByClassName("div2")
// console.log(input2[1].style.backgroundColor = "red")


// let input3 = document.getElementsByTagName("div")
// console.log(input3[0].innerHTML)

// let a = document.getElementsByClassName("div2")
// a[1].textContent = "Đã được thay đổi" 

// let a = document.getElementById("msg")
// a.insertAdjacentHTML('beforeend','<div>Hi hi</div>')




//Count
// function up(number){
//     let a = Number(document.getElementById("ketqua").textContent)
//     a = a + number
//     document.getElementById("ketqua").textContent = a
// }

// function cat (){
//     document.getElementsByTagName("img")[0].src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
// }

// function dog (){
//     document.getElementsByTagName("img")[0].src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
// }


//Timer

//let x = setInterval(function(){},1000)

function start(){
    let input = document.getElementById("input").value
    console.log(input)
    window.x = setInterval(function(){
        //count down
        document.getElementById("result").innerHTML = input
        input--
        if (input < 0){
            clearInterval(x)
        }
    },1000)
}

function stop(){
    clearInterval(window.x)
    //console.log(a)
}

if (true){
    var a = 10
    let b = 10
}







