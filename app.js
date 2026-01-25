// alert("Hello, world!")



// var message = "Welcome to JavaScript programming."
// alert(message)

// var a = 10
// alert(a)


// var 2name = "John" Invalid variable name
// var name2 = "John" // Valid variable name
// var @name = "John" // Invalid variable name
// var a2 = "John" // Valid variable name
// var fi rastName = "John" // Invalid variable name due to space

// var a = 10
// var b = 5
// var c = 15 

// var d = (a + b) * c
// console.log(d)

// var firstName = "John"
// var lastName = "Doe"  

// var fullName = firstName + " " + lastName
// console.log(fullName)


// var firstName = prompt("Enter your first name:")
// console.log(firstName)

// var lastName = prompt("Enter your last name:")
// console.log(lastName);

// var officer = true

// if(officer){
//     console.log("document submit");
    
// }
// else{
//   console.log("wapis");
  
// }


// var a = 10
// var b = 5

// if(a == b){
//     console.log("a is equal to b");
// } else{
//     console.log("a is not equal to b");
// }


// var age = prompt("Enter your age:");

// if(age >=18){
//     console.log("you are allowed");

// }else{
//     console.log("you are not allowed");
// }

// var english_marks = +prompt("Enter your English marks:");
// var urdu_marks = +prompt("Enter your Urdu marks:");
// var science_marks = +prompt("Enter your Science marks:");
// var math_marks = +prompt("Enter your Math marks:");
// var islamyat_marks = +prompt("Enter your Islamyat marks:");
// var total_marks = 500

// var obtained_marks = english_marks + urdu_marks + science_marks + math_marks + islamyat_marks

// var percentage = (obtained_marks / total_marks) * 100

// console.log(percentage);

// if(percentage >= 80){
//     console.log("A+ Grade");
// }
// else
// if(percentage >=70){
//     console.log("A Grade");
// }
// else
// if(percentage >=60){
//     console.log("B Grade");
// }
// else
// if(percentage >=50){
//     console.log("C Grade");
// }
// else
// if(percentage <50){
//     console.log("Fail");
// }



// var a = 10
// var b = "ab"
// var c = a + b

// if(c){
//     console.log("a is equal to b");
// } else{
//     console.log("a is not equal to b");
// }

// var a = 9
// if(a >5 && a <15){
//     console.log("correct");
// } else{
//     console.log("incorrect");
// }

// var age = 25
// var studentCard = true
// if(age >=18 || studentCard){
//     console.log("Allowed");
// } else{
//     console.log("Not Allowed");
// }

// var a = 10
// var b = --a
// console.log(a,'a');
// console.log(b, 'b');

// var a = ["Muhammad", "Ali", "Ahmed", "Usman", "Umer"]
// console.log(a);
// console.log(a[0]);
// console.log(a.length);

// console.log(a.indexOf("Umer"));

// var a = [1,2,3,4,5]

// a[3] = 10;
// a.push(29)
// a.pop()
// a.shift()
// a.unshift(77)

// var b = a.slice(1,4)
// console.log(a);
// console.log(b);



// var a = [1,2,3,4,5]
// a.splice(1,4, 10,20,30)
// console.log(a);

// for(var i = 0; i < 20; i++){
//    console.log(i, "ajaja");
// }

// var a = [1,2,3,4,5] 
// for(var i = 0; i<20;i++ ){
//   console.log(a[i]);
  
// }

// var a = [1,2,3,4,5]
// for(var i = 0; i<a.length;i++ ){
//   console.log(a);
  
// }

// var a = ["Muhammad", "Ahmed", "Hamid", "Mehmood", "Qasim"]
// for(var i = 0; i < a.length;i++){
//   if(a[i] === "Hamid"){
//     console.log(i,"Found");
//     break;
//   }
//   else{
//     console.log(i,"Not Found");

//   }
// }

// var a = ["A", "B", "C", "D"]
// var b = [1,2,3,4,5]
// var c =[]

// for(var i = 0; i < a.length; i++){
//   for(var j = 0; j < b.length; j++){
//     console.log(a[i]+b[j]);
//     c.push(a[i]+b[j])
    
//   } 
// }
// console.log(c);


// var c = ["A1", "A2", "A3", "A4", "A5","B1", "B2", "B3", "B4", "B5","C1", "C2", "C3", "C4", "C5", "D1", "D2", "D3", "D4", "D5"]

// var found = false;

// for(var i = 0; i < c.length; i++){
//   if(c[i]=== "C3"){    
//     found = true;
//     break;      
// } else{
//     found = false;
//   }
// }


// if(found){
//   console.log("Found");
// }else{
//   console.log("Not found");
  
// }

// var a = "aLi"
// // console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// var a = "ahmed"

// var firstLetter = a.slice(0,1)
// firstLetter = firstLetter.toUpperCase()

// var otherletter = a.slice(1)
// otherletter = otherletter.toLowerCase()

// var fullName = firstLetter + otherletter
// console.log(fullName);

// var a = "gafoor"
// console.log(a.charAt(3));
// console.log(a.indexOf('f'));

// var a = "abc,yugy,ug,7777"
// console.log(a.split(","));

let i = 0
while (i < 10){
    i++
    console.log(i);
}
    