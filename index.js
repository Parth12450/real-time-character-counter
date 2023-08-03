const textareaEL = document.getElementById("textarea");

const totalcounterEl = document.getElementById("Total-counter");

const remainingcounterEl = document.getElementById("Remaining-counter")

textareaEL.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
    totalcounterEl.innerText = textareaEL.value.length;
    remainingcounterEl.innerText = textareaEL.getAttribute("maxlength") - textareaEL.value.length;
};