

const calculate=document.getElementById("calculate");
calculate.addEventListener("click",circle)
function circle(){
   const showResult=document.getElementById("showResult");
    const CircleInput=document.getElementById("CircleInput").value;
    const CirclerResult=((4/3)*3.1416*CircleInput*CircleInput).toFixed(2);
    console.log(CirclerResult); 
     result(CirclerResult,"circle");
    
   
}


const calculatetraingle=document.getElementById("calculatetraingle");
calculatetraingle.addEventListener("click",triangle)
function triangle(){
   const showResult=document.getElementById("showResult");
    const highInput=document.getElementById("baseInput").value;
    const baseInput=document.getElementById("highInput").value;
    const TriangleResult=(0.5*highInput*baseInput).toFixed(2);

    const shape="Traingle"
    result(TriangleResult,shape)
            
}

const calculatepParallo=document.getElementById("calculatepParallo");
calculatepParallo.addEventListener("click",parallogram)
function parallogram(){
   const showResult=document.getElementById("showResult");
    const highInput=document.getElementById("baseInput1").value;
    const baseInput=document.getElementById("highInput1").value;
    const parallogramResult=(highInput*baseInput).toFixed(2);

    const shape="parallogram"
    result(parallogramResult,shape)
            
}
const calculateRect=document.getElementById("calculateRect");
calculateRect.addEventListener("click",Rectangle)
function Rectangle(){
   const showResult=document.getElementById("showResult");
    const highInput=document.getElementById("HightInput").value;
    const baseInput=document.getElementById("widthinput").value;
    const rectangleResult=(highInput*baseInput).toFixed(2);

    const shape="Rectangle"
    result(rectangleResult,shape)
            
}

const square=document.getElementById("square");
square.addEventListener("click",Square)
function Square(){
   const showResult=document.getElementById("showResult");
    const inputSquare=document.getElementById("inputSquare").value;
    const SquareResult=(inputSquare*inputSquare).toFixed(2);
    
     result(SquareResult,"Square");
            
}





function result(CirclerResult,shape){
    console.log(CirclerResult)
    if(CirclerResult==0||CirclerResult==="NaN"){
        alert("PLease Enter valid input");
    }
    else{
        const list=document.createElement('li');
        const brake=document.createElement('br')
        list.appendChild(brake);
    const result=document.createElement('b');
    result.innerHTML="Area of "+shape+" "+CirclerResult +"   ";
    list.appendChild(result);
    showResult.appendChild(list);
    result.style.fontSize="20px";

    var button=document.createElement('button');
    button.innerHTML="X";
    button.style.width="50px"
    button.fontSize="40px";
    list.appendChild(button);
    showResult.appendChild(list);
 
    button.addEventListener("click",function(){
        showResult.removeChild(list);
       
        CircleInput.value=' ';
    });   
    }
}