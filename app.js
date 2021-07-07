var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
 function getTranslationURl(text) {
  return (serverURL + "?" + "text=" + text)
}
function errorHandler(error) {
   console.log("error occured", error);
   alert("something wrong with server! try again after some time")
}

function clickHandler() {
  // outputDiv.innerText= "translated" + txtInput.value;
  var inputText = txtInput.value; //taking input

  fetch(getTranslationURl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })

    .catch(errorHandler)
   };
btnTranslate.addEventListener("click", clickHandler);
// 1. document.querySelector("textarea")
// 2. .btn-primary
// 3. #input-btn
// 4. input [name= "translator"
