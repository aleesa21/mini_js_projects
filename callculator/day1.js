let display = "";
let firstno = "";
let operator = "";
let secondno = "";

function handleclick(value) {
  if (!isNaN(value)) {
    display += value;
    document.getElementById("screen").innerHTML = display;
  }
  if (value == "+" || value == "-" || value == "*" || value === "/") {
    firstno = display;
    operator = value;
    display =firstno+operator;
    document.getElementById("screen").innerHTML=display;
  }

  if (value === "=") {
    array_of_nos= display.split(operator)
    secondno=array_of_nos[1];
    console.log(secondno,display,array_of_nos)
    
    let result = calculate(firstno, operator, secondno);
    document.getElementById("screen").innerHTML = result;
  }
  if(value=="c"){
    display=""
    document.getElementById("screen").innerHTML="";
  }
}
function calculate(a, op, b) {
    a=Number(a)
    b=Number(b)
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "/") return a / b;
  if (op === "*") return a * b;
}
