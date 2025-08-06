
let button_ele = document.querySelector(".btn");

let outputEle=document.getElementById("output");

button_ele.addEventListener("click",(event)=>{
    let yearEle=parseInt(document.getElementById("year").value);
    isLeapYear(yearEle);
    document.getElementById("year").value="";
})

function isLeapYear(yearEle){
    if(isNaN(yearEle)){
        outputEle.innerText="Enter Valid Year.";
    }
    else if((yearEle%400===0) || ((yearEle%4===0) && (yearEle%100!==0))){
        outputEle.innerText=yearEle + " is a Leap Year.";
    }
    else{
        outputEle.innerText=yearEle + " is not a Leap Year.";
    }
}
