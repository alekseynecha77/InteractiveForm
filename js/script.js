const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const e = document.getElementById("title");
const activities = document.getElementById('activities');


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
console.log(shirtColorOption[i].value);
shirtColor.selectedIndex = 0;

    if(shirtDesign.value === dataTheme){
        shirtColor[i].style.display = 'block';
    }
    else{
        shirtColor[i].style.display = 'none';

    }
}


})

// activities.onchange =(e)=>{
// const click = e.target;
// const cost = click.getAttribute('data-cost');
// const parsedCost = parseInt(cost);

// }