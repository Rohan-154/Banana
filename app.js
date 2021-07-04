var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input"); 
var outputDiv= document.querySelector("#output");




 function clickHandler(){
  
   outputDiv.innerText= "translated" + txtInput.value;
    
 };
 btnTranslate.addEventListener("click", clickHandler)

// 1. document.querySelector("textarea")
// 2. .btn-primary
// 3. #input-btn
// 4. input [name= "translator"