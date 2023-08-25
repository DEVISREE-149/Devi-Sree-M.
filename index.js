
    //js 
    /*comment
        alert("Welcome");
        alert(4/2); we move alert coz cmd doesnot support alert pop*/
        console.log("Hi This is my first project");

        var name="devi";
        console.log("Hi " + name + " Welcome to this page ");

        let num1=5;
        let num2=10;
        let total=num1*num2;
        console.log(total);
       
        const first = "Bala";
        const dob = "14/09/1999";
        
        let msg= "My name is " + first + " My DOB is " + dob  ;
        
        console.log(msg);

     //Data types

        let firstName="Dv 14";//string
        let age=23; // int
        // let undefined=undefined;
        
        let iamstud = false //boolean

    let experience=null //null
//Objects {}
    let biodata = {
        cand: "devisree",
        AGE: 23,
        exp: 1,
        iamstud: "unom",
        Friends: {
            brother: "Balaji",
            sister:"Pooja"
        }
    };
let AGE = 25;
    console.log(biodata.imstud);
    console.log(biodata.Friends.brother);
//Array[]
    let color=[
        "white","blue",258,"yellow"
    ];
color[7]= "Green";
    console.log(color);
    console.log(color[2]);
    console.log(color.length);

    document.write("Hello world");

    //function

    function dv(name){
        let msg= "Hi  " + name + " here, How do you doing? ";
        console.log(msg)
    }

dv("Devisree")

function result(total){
    console.log(total);
}

result(5*2)

//Arithmetic Operator
//increment opertor

var numb1=55;
var numb2=66;
console.log(numb1++);
console.log(numb1);
//console.log(++numb1);

//decrement operator

console.log(numb1--);
console.log(numb1);
//console.log(--numb1);

// Comparison Operator
console.log(5<9);

var x=5;
console.log(x===5); //5==5

var y=66;
console.log(y!==66);//66 != 66

// // Equality operator
// === strict equality opertor(datatype+value will be same)
// == lose equality opertor

console.log("77"==9);//string==num
console.log("9"===9);//string ===num

// Ternary Operator
// condition ? value_if_true : value_if_false
let ages=7;
let type=ages > 18 ? "adult":"child";
console.log(type);

// Logical Operator

let highincome= true;
let scoreforloan=false;

let loan=highincome || scoreforloan;
let eligble=!loan;
console.log("x"+  loan);
console.log("y"+eligble);