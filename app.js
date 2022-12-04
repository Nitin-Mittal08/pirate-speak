var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var outputDiv  = document.querySelector("#translate-output")
var serverURL = "https://api.funtranslations.com/translate/pirate.json";
function getTranslationURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
}
btnTranslate.addEventListener("click", function clickEventHandler(){
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(input => outputDiv.innerText= input.contents.translated)
    .catch(errorHandler);
    
});