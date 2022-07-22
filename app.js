// Book Practice Question 
// var a = new Date() + "<br>";
// document.write(a)+"<br>";
// var dob = new Date (prompt("Enter your dob","Jan 5,2001"));
// var dobmili = dob.getTime()
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili
// var age = Math.floor(diff/(1000*60*60*24*30*12))
// document.write(age)

                //  xxxxxxxxxxxxxxxxxxx //

//  Answer to Question 1
// var date = new Date();
// console.log(date);

//  Answer to Question 2
// var month_arr = ['Jan','Feb','Mar','Apr','MAy','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// var date = new Date();
// console.log(date);
// var month = date.getMonth();
// var currentMonth = month_arr[month];
// console.log("Current Month is : " + currentMonth);

// Answer to Question 3
// var currentDay = new Date();
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// Answer to Quesstion 4
// var currentDate = new Date();
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }
// else if(c === "Sun"){
//     document.write("It's Fun Day")
// }

// Answer to Question 5
// var d= new Date()
// var day = d.getDate()
// if(day<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last fifteen days of the month")
// } 

// Answer to Question 6
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// Answer to Question 7
// var date = new Date();
// var time = date.getHours();
// console.log(time);
// if(time == 12){
//     alert("Its AM")
// }
// else {
//     alert("Its PM")
// }

// Answer to Question 8
// var date=new Date();
// var day = date.lastday(2020,12);
// document.write(day)

// Answer to Question 11
// const d = new Date();
// d.setHours(d.getHours()+1);
// alert(d)

// Answer to Question 12
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// alert(d)

// Answer to Question 13
// var yearBorn=prompt("Enter your date of birth")
// var d= new Date()
// var n=d.getFullYear()
// var currentDate= new Date()
// var currentYear = currentDate. getFullYear();
// var age= currentYear-yearBorn
// console.log(age)


// Answer to Question 14
// var custName= 'ABC'
// var currentMonth='February'
// var numUnit=410
// var charges_Per_Unit=16
// var amount_within_due_date=650
// var late_payment=350
// var amount_after_due_date=6910

// var NetAmountDue=numUnit*charges_Per_Unit
// var paymentAfterDue=NetAmountDue+late_payment
// console.log(NetAmountDue)
// console.log(paymentAfterDue)

//Chapters# 35-38
// Answer to Question 1
// function date(){
//     var date = new Date();
//     document.write(date);
// }
// date();

// Answer to Question 2
// function greet(){
//     var firstName=prompt("Enter first name")
//     var lastName=prompt("Enter last name")
// }
// greet()

// Answer to Question 3
// function add(){
//     var valOne=prompt("Enter first value ")
//     var valTwo=prompt("Enter second value")
//     var c=parseInt(valOne)+parseInt(valTwo)

//     return  c

// }
// console.log(add())

//Question#4 "CALCULATOR"

// var a=parseInt(prompt("enter  1 no"))
// var b=parseInt(prompt("enter 2 no"))
// var c=prompt("enter operator")
// if(c=="+"){
//     function add(a,b){
//         var result=a+b
//         return result
//     }
//     console.log(add(a,b))
// }
// else if(c=="-"){
//     function sub(a,b){
//         var result=a-b
//         return result
//     }
//     console.log(sub(a,b))
// }
// else if(c=="*"){
//     function mul(a,b){
//         var result=a*b
//         return result
//     }
//     console.log(mul(a,b))
// }
// else{
//     function div(a,b){
//         var result=a%b
//         return result
//     }
//     console.log(div(a,b))
//}

// Answer to Question 5
// function square(){
//     var input = prompt ("Enter a num")
//     var num = input*input;
//     document.write("Square of a number : " + num)
// }
// square()

// Answer to Question 6
// program to find the factorial of a number
// function factorial(n) {
//     var answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var n = prompt("enter no");
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// function list(){
//     var firstNum=parseInt(prompt("Enter first number"))
//     var secondNum=parseInt(prompt("Enter last number"))

//     for(i=firstNum; i<=secondNum; i++){
//         console.log(i)

//     }
// } list()

// Answer to Question 7
// function findHypotenuse(side1, side2){
 
//      h = (((side1 * side1) + (side2 * side2))**(1/2));
//     return h;
// }
//  side1 = parseInt(prompt("Enter a side1"));
//  side2 = parseInt(prompt("Enter a side2"));
 
// document.write(findHypotenuse(side1, side2));

// Answer to Question 8
// function area(width,height){
//     var a = width * height;
//     return a;
// }
// width=2;
// height=3;
// document.write("The area of rectangle is : " + area(width,height))

// function palindrome(){
//     var word=prompt("enter word")
//     var lngth=word.length
//     console.log(lngth)
//     if(word.charAt(0)==word.charAt(lngth-1)){
//         console.log("palindrome")
//     }
//     else{
//         console.log("not palindrome")
//     }
// }
// palindrome()

//Question#12

// function longestWord(){
//     var strSplit=('Web Development Tutorial').split('');
//     var strSplit=["Web", "Development" , "Tutorial"];
//     var longestWord=0
//     for(var i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord){ 
//             longestWord = strSplit[i].length; 
//         }
        
//     }
//     return longestWord; 
// }
// console.log(longestWord())

//Question#13
// var str="JSResourceS.com"
// var count=(str.match(/o/g)).length;
// document.write(count)

//Question#14
// var radius=parseFloat(prompt("Enter radius"))

 
// function calcCircumference(a){
//     var result=2*radius*3.142
//     console.log(result)
// }
// function calcArea(a){
//     var result=3.142*(radius**2)
//     console.log(result)
// }
// calcArea(radius)
// calcCircumference(radius)