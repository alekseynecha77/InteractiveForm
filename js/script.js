const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const e = document.getElementById("title");


window.onload = function() {
    document.getElementById('name').focus();
    document.getElementById('other-job-role').style.display = "none";
    shirtColor.disabled = true;
  }


e.addEventListener('change', ()=>{
var value = e.value;
if(value === 'other'){

    document.getElementById('other-job-role').style.display = "block";
}else{
    document.getElementById('other-job-role').style.display = "none";

}

})

shirtDesign.addEventListener('change', ()=>{
    shirtColor.disabled = false;

for(var i = 0; i < shirtColor.length; i++){

    //JS Puns
    if(shirtColor[i].value === 'tomato'){
        shirtColor[i].style.display = 'none';
    }
    if(shirtColor[i].value === 'steelblue'){
        shirtColor[i].style.display = 'none';
    }
    if(shirtColor[i].value === 'dimgrey'){
        shirtColor[i].style.display = 'none';
    }
    if(shirtColor[i].value === 'cornflowerblue'){
        shirtColor[i].style.display = 'block';
    }
    if(shirtColor[i].value === 'darkslategrey'){
        shirtColor[i].style.display = 'block';
    }
    if(shirtColor[i].value === 'gold'){
        shirtColor[i].style.display = 'block';
    }

    // I ♥ JS

    if(shirtColor[i].value === 'tomato'){
        shirtColor[i].style.display = 'block';
    }
    if(shirtColor[i].value === 'steelblue'){
        shirtColor[i].style.display = 'block';
    }
    if(shirtColor[i].value === 'dimgrey'){
        shirtColor[i].style.display = 'block';
    }
    if(shirtColor[i].value === 'cornflowerblue'){
        shirtColor[i].style.display = 'none';
    }
    if(shirtColor[i].value === 'darkslategrey'){
        shirtColor[i].style.display = 'none';
    }
    if(shirtColor[i].value === 'gold'){
        shirtColor[i].style.display = 'none';
    }
}


})
