//console.log("Hihi")

//Init
//Declare a variable named movie with an object value, containing the following properties:
//-title, For example: ‘The dark night rises’
//-year, For example: 2012
//-rate, For example: 8.4
// Coding here
// let movie = {
//     title:"The dark night rises",
//     year: 2012,
//     rate: 8.4
// }
// console.log(movie)

// Read 
// Log all of 3 the properties of the movie object to the console using 2 different ways
// Log an non-existent property of the movie, director, what is the result?
//Coding here
//Solution1
// console.log(movie.title)
// console.log(movie.year)
// console.log(movie.rate)
//Solution2
// console.log(movie["title"])
// console.log(movie["year"])
// console.log(movie["rate"])
// console.log(movie.director)
// Now apply it to upgrade Read object, after users enter the property, check whether the property exists.
// If yes, show them the value, if no, tell them that
//Coding here
// let property = prompt("Thuoc tinh ban muon xem?")
// console.log(property)
// console.log(typeof(property))
// while (true){
//     if (property == "title" || property == "year" || property == "rate"){
//         alert(movie[property])  
//         break;      
//     }else{
//         alert(` '${property}' dose not exist `)
//         property = prompt("Thuoc tinh ban muon xem?")
//     }
    
// }

// let test = {
//     title: "abc",
//     title: "xyz",
// }
// test.title = "hello"
// console.log(test)

