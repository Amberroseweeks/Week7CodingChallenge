// 1. Coding challenges:

// var names = [
//     {name: "OGGI", age: 23, coutntry: "USA"},
//     {name: "GEORGE"},
//     {name: "JOHN"},
//     {name: "JAMES"},
//     {name: "PAUL"},
//     {name: "JEREMY"}
// ]

// function loopingThrough(array) {
// 	for(let i = 0;i<names.length; i++) {
// 		console.log(names[i].name)
// 	}
// }

// loopingThrough(names)

// 2. Write a function that lists all the numbers from 100 to 0; 
// if a number is divisible by 4 print “This is divisible by 4”; 
// if a number is divisible by 6 prints “THis is divisible by 6"; 
// if a number is divisible by both 4 and 6 
// print “This one is divisible by both 4 and 6”.

// function sixtyfour () {
// 	for(var i = 100; i > 0; i--) {
// 		if(i % 4 === 0 && i % 6 === 0) {
// 			console.log("this is divisible by both 4 and 6")
// 		} 
// 		else if( i % 4 === 0 ) {
// 			console.log("this is divisible by both 4")
// 		} else if (i % 6 === 0) {
// 			console.log("this is divisible by 6")
// 		} else {
// 			console.log(i)
// 		}
// 	}
// }

// sixtyfour()

// 10. Create an array. Using the .forEach() method on the array,
//  print each element to  the console.
//   If you are unsure on how to use .forEach(), Google it.
// var array = ["Oggi", "Boro", "Spas", "Rad"]

// array.forEach(function(name) {
// 	console.log(index)
// 	console.log(name)
// })


// 2. Scope


// var, let and const

// const s = "something"
// unchangable varaible; you can't change its value or you can't declare any other variable with the same name


// var s = 1;

//  function whatever(){  
// 	s = 14;  
// 	console.log(s)  
//  }

// whatever()
// console.log(s) 

// let
// var c = 10;  

// function hallo(){  
// 	if(true){  
// 		var c = 2;  
// 	}  
// console.log(c); 
// }

// when it is var c within the if statement it prints 2
// when it is let c within the if statment it prints 10

// for(let i = 0;i < 3;i++){
//   console.log(i)
//   for(let i = 111; i<113;i++){
//     console.log(i)
//   }
// }
// if we run nested for loop with let and the same variable name it executes correctly
// if we change the let to var it won't execute correctly



// 3. Callback functions: setTimeout and setInterval


    // function hello(){
    // 	setTimeout(function(){
    // 		console.log('hello')		
    // 	}, 1000)
      
    // }
    // function world(){
    // 	setInterval(function() {
    //   		console.log('world')
    // 	}, 1000)
    // }

    // hello()
    // world()



// 4. Date object

// var date = new Date();

// date.getHours()
// date.getMinutes()
// date.getSeconds()

// var Date = {
// 	getHours = function() {

// 	}
// }

// var obj = {
// 	name: "oggi",
// 	location: function() {
// 		console.log("he lives in Philadelphia")
// 	}
// }

// obj.location()

// let array = new Array();
// console.log(array)


// Writing css in javascript


// let box = document.createElement("div");
// box.style.width = "100px";
// box.style.backgroundColor = '#656864';
// box.style.height = "100px";
// box.style.border = "2px solid teal";
// box.style.transform = "rotate(20deg)"
// document.body.appendChild(box)

// let box2 = document.createElement("div");
// box2.style.width = "20px"
// box2.style.height = "20px"
// box2.style.background = "red"
// box.appendChild(box2)

// var color = ["red", 'green']


// function hello () {
//     setInterval(function() {
//         var date = new Date();
//         var s = date.getSeconds();
//         console.log(s)
//         element.style.backgrondColor = "#345455"  
//     }, 1000)
// }

// math random
// will give you the number between 0 and 1

// console.log(Math.random())

// if you want to get a random number between 1 and 10 you will write something like:

// var number = Math.random()*10

// Math.floor || Math.ceiling

// they round to the smaller/bigger whole number

// var number =Math.floor(Math.random()*100)

// console.log(number)

// while loop

// var i = 100;

// while(i > 0) {
//     console.log(i)
//     i--;
// }

// I need to get rid of the "/static/" and have as a final result an array that contains
// files only in this format => "image1.jpg"


let images = [
 "/static/image1.jpg", "/static/image2.jpg", "/static/image3.jpg", "/static/image4.jpg",
 "/static/image5.jpg", "/static/image6.jpg", "/static/image7.jpg", "/static/image8.jpg",
 "/static/image9.jpg", "/static/image10.jpg", "/static/image11.jpg", "/static/image12.jpg"
 ]


/*const splitStting = originalString.split("/static/");

console.log(splitString)*/


const originalString = "/static/image1.jpg";

// Split string by whitespace character
const splitString = originalString.split("/static/");

console.log(splitString);




/*for( var i = 0; i < images.length; i++){ 
    
    if ( images[i] === "/static/") { 
        images.splice(i, 1); i--; 
    console.log(images)
    }
    */



/*const originalString = "/static/image1.jpg"

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("/static/image1.jpg", "image1.jpg");

console.log(newString);*/



/*
const originalString = "/static/image1.jpg"

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("image1.jpg");

console.log(newString);*/

//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

/*var newimages = images.replace('/static/','');
console.log(ret);   //prints: 123*/



