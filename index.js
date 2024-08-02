// alert("HII");


function task1() {
    let a = prompt("Enetr 1st Number");
    let b = prompt("Enetr Last Number");
    a = Number(a);
    b = Number(b);
    for (let index = a; index <= b; index++){
        if(index % 2 == 0){
        console.log(index );
    }
  
    }
}



function task2() {
    let a = prompt("Enetr 1 for Say Hello!.\nEnter 2 to add two numbers.\nEnter 3 to say Good Bye.\nEnter 4 to push in Array.");
    a = Number(a);
    let myArr = [1,2,4,"Ali"];
    switch (a) {
        case 1:
            console.log("Hello!");
            break;
            
        case 2:
            let a = Number(prompt("Enter 1st number"));
            let b = Number(prompt("Enter 2nd number"));
            let c = a+b;
            console.log("Sum of "+a," and "+b, " is : "+c);
            break;
        case 3:
            console.log("Good Bye!");
            break;
        case 4:
            let p =prompt("Enter any value to pust in Array");
            myArr.push(p);
            console.log("Array afetr push is: " +myArr);
            break;

        default:
            alert("Invalid Input!");
            break;
    }
}



function task3() {
    let myArr2 = []; 
    for(let i = 1; i <= 50; i++ ){
        if(i <= 20){
            myArr2.push(i);
        }
        else
            break;
    }
    console.log("Array after push: " + myArr2);
}