const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const e = document.getElementById("title");


window.onload = function() {
    document.getElementById('name').focus();
    document.getElementById('other-job-role').style.display = "none";

  }


e.addEventListener('change', ()=>{
var value = e.value;
if(value === 'other'){

    document.getElementById('other-job-role').style.display = "block";
}else{
    document.getElementById('other-job-role').style.display = "none";

}

})

shirtColor.setAttribute('hidden', '');
shirtDesign.addEventListener('change', ()=>{
    if(value === 'js puns'){
    shirtColor.removeAttribute('disabled', '')
    shirtColorOption[0].setAttribute('hidden', '');
    shirtColorOption[1].removeAttribute('hidden', '');
    shirtColorOption[2].removeAttribute('hidden', '');
    shirtColorOption[3].removeAttribute('hidden', '');
    shirtColorOption[4].setAttribute('hidden', '');
    shirtColorOption[5].setAttribute('hidden', '');
    shirtColorOption[6].setAttribute('hidden', '');
    }
    
    else if(value==='heart js'){
        shirtColor.removeAttribute('disabled', '')
        shirtColorOption[0].setAttribute('hidden', '');
        shirtColorOption[1].setAttribute('hidden', '');
        shirtColorOption[2].setAttribute('hidden', '');
        shirtColorOption[3].setAttribute('hidden', '');
        shirtColorOption[4].removeAttribute('hidden', '');
        shirtColorOption[5].removeAttribute('hidden', '');
        shirtColorOption[6].removeAttribute('hidden', '');
    }
    else{
        shirtColor.setAttribute('disabled', '')


    }


})