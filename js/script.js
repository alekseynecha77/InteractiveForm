const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const e = document.getElementById("title");
const activities = document.getElementById('activities');
let total = 0;
const activitiesCost= document.getElementById('activities-cost');
const checkBoxes = document.querySelectorAll('input[type=checkbox]');

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

for(var i = 0; i < shirtColorOption.length; i++){

var dataTheme = shirtColorOption[i].getAttribute('data-theme');
shirtColor.selectedIndex = 0;

    if(shirtDesign.value === dataTheme){
        shirtColor[i].style.display = 'block';
    }
    else{
        shirtColor[i].style.display = 'none';

    }
}


})

//register for Activities
activities.addEventListener('change', (e)=>{


    var cost = e.target.getAttribute('data-cost');
const checked = e.target.checked;

if(checked === 'true'){
    cost+= total * 1;


    }else{
        cost -= total * 1;

    }
    activitiesCost.innerHTML = `Total: $${ parseInt(cost) }`;


})
