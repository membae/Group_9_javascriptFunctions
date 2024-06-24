//question one
let price = 40;
let product="coffee";
let isAvailable=true;

//console.log(typeof(price));
//console.log(typeof(product));
//console.log(typeof(isAvailable));

//question 2
let num=[20,30,45,67,80];
const car={
    make:"mazda",
    model:"cx5",
    year:2020,
}
car['year']=2016;
//console.log(car);


 //question 3

let a=10;
let b="10"
//console.log(a==b);
//console.log(a===b);
// line 25 is not able to differentiate between a number and a string but for line 26 its able to.

//question 4

/**let strg1="code";
let strg2="dog";
if(strg1<strg2){
    console.log("string 1 is smaller than string 2");
}
else{
    console.log("string 2 is smaller than string 1");
}
// this checks if string one appears alphabetically before string two

//question 5

//function isAdult(age){
   // if(age<13){
        console.log("child");
   // }
   // else if(age>=13 && age<=19){
        console.log("teenager");
    //}
  //  else{
        console.log("adult");
   // }
//}
//isAdult(10);


//question 6

/**function grade(score){
    if(score>=90){
        console.log("A");
    }
    else if(score>=80 && score<=89){
        console.log("B");
    }
    else if(score>=70 && score<=79){
        console.log("C");
    }
    else if(score>=60 && score<=69){
        console.log("D");
    }
    else{
        console.log("F");
    }
}
grade(70);*/

/**function isEven(num){
    if(num>0 && num%2===0){
        console.log("the number is positive and even");
    }
    else{
        console.log("the number does not meet both conditions");
    }
}
isEven(-40);*/

//question 8

/**function isValid(status){
    if(status=="admin" || status=="valid subscription"){
        console.log("access granted");
    }
    else{
        console.log("Access denied");
    }
}
isValid("admin");*/
 
//question 9
/**let x;
for(x=1;x<=20;x++){
    if(x%3==0){
        continue;
    }
    console.log(x);
    
}*/

//question 10

/**function day(getDay){
    switch(getDay){
        case 0:
            console.log("Sunday");
            break;
        case 1:
                console.log("Monday");
                break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break; 
        case 4:
             console.log("Thursday");
            break;
        case 5:
             console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
             break;  
        default:
            console.log("Invalid day");
    }
}
day(8);*/

//Question 11

/**let x=1;
let n=4;
let sum=0;
while(x<=n){
    sum+=x;
    x++;
}
console.log(sum);*/

let x=1;
let sum=0;
function summation(n){
    while(x<=n){
        sum+=x;
        x++;
    }
    console.log(sum);
}
summation(23);