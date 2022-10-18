const shirtColor = document.getElementById("color");
const shirtColorOption = document.querySelectorAll("#color option");
const shirtDesign = document.getElementById("design");
const e = document.getElementById("title");
const activities = document.getElementById('activities');
let total = 0;
const activitiesCost= document.getElementById('activities-cost');
const checkBoxes = document.querySelectorAll('input[type=checkbox]');
const cardInput = document.getElementById('payment').selectedOptions[1];
const form = document.querySelector("form");
const ccNum = document.getElementById("cc-num");

const paymentOption = document.getElementById("payment");

const creditPayment = document.getElementById("credit-card");
const bitcoinPayment = document.getElementById("bitcoin");
const paypalPayment = document.getElementById("paypal");


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


    var cost = parseInt(e.target.getAttribute('data-cost'));
const checked = e.target.checked;

if(checked === true){
    total += cost;


    }else {
        total -= cost;

       }

    activitiesCost.innerHTML = `Total: $${total}`;


})

function validateName(){
    const name = document.getElementById('name');
    if (name.value === '') { 
      name.parentElement.classList.add('not-valid');
      name.parentElement.classList.remove('valid');
      name.parentElement.lastElementChild.style.display = 'block';
      return false;
    }else{
        name.classList.remove("error");
        name.parentElement.classList.remove("not-valid");
        name.parentElement.classList.add("valid");
        name.parentElement.lastElementChild.style.display = "none";
        return true;
    }
}
function validateEmail(){

    const email = document.getElementById('email');

    const validatonfoREmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value.match(validatonfoREmail)){
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.parentElement.lastElementChild.style.display = 'block';
        return false;
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("not-valid");
        email.parentElement.classList.add("valid");
        email.parentElement.lastElementChild.style.display = "none";
        return true;
    } 
 
}
// function validateActivities(){

// }
// function validatePayment(){
//  
// }

form.addEventListener('submit', e =>{

let arr = [];
arr += validateName();
arr += validateEmail();

if(arr.includes(false)) {
    e.preventDefault();
}

})


   









