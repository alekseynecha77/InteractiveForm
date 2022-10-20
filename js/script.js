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
const name = document.getElementById('name');
const email = document.getElementById('email');
const paymentOption = document.getElementById("payment");
const ccZip = document.getElementById("zip");
const creditPayment = document.getElementById("credit-card");
const bitcoinPayment = document.getElementById("bitcoin");
const paypalPayment = document.getElementById("paypal");
const ccCvv = document.getElementById('cvv'); 
const ccNumRegex = /^[0-9]{13,16}$/;
const ccZipRegEx = /^[0-9]{5}$/;
const ccCvvRegEx = /^[0-9]{3}$/;
const nameRegex = /^[a-zA-Z\s]+$/i;
const validatonforEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
const onoffFocus = document.querySelectorAll('#activities input[type="checkbox"]');

window.onload = function() {
    document.getElementById('name').focus();
    document.getElementById('other-job-role').style.display = "none";
    shirtColor.disabled = true;
    paymentOption.value = "credit-card";    
  }

bitcoinPayment.style.display = 'none';
paypalPayment.style.display = 'none';

paymentOption.addEventListener('change', (e) => {
    if(e.target.value === 'credit-card'){
        creditPayment.style.display = 'block';
        bitcoinPayment.style.display = 'none';
        paypalPayment.style.display = 'none';
    }else if(e.target.value === 'paypal'){
        creditPayment.style.display = 'none';
        bitcoinPayment.style.display = 'none';
        paypalPayment.style.display = 'block';
    }else if(e.target.value === 'bitcoin'){
        creditPayment.style.display = 'none';
        bitcoinPayment.style.display = 'block';
        paypalPayment.style.display = 'none';
    }
});  


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

function validateInputs(input, regex){
    console.log(input, regex);
    if (input.value === '' || !regex.test(input.value)) { 
      input.parentElement.classList.add('not-valid');
      input.parentElement.classList.remove('valid');
      input.parentElement.lastElementChild.style.display = 'block';
    }else{
        input.classList.remove("error");
        input.parentElement.classList.remove("not-valid");
        input.parentElement.classList.add("valid");
        input.parentElement.lastElementChild.style.display = "none";
    }
}

function validateActivities(){
let arr = [];

for( i = 0; i<checkBoxes.length; i++){
    arr += checkBoxes[i].checked;
}
if(arr.includes(true)){
    activities.classList.remove("not-valid");
    activities.classList.add("valid");
    activities.lastElementChild.style.display = "none";

    return true;
}else{
    activities.classList.add("not-valid");
    activities.classList.remove("valid");
    activities.lastElementChild.style.display = 'block';
    return false;
}
}


form.addEventListener('submit', e =>{

  validateInputs(name, nameRegex);
  validateInputs(email, validatonforEmail);
  validateActivities();

  if (paymentOption.value === 'credit-card') {
    validateInputs(ccNum, ccNumRegex);
    validateInputs(ccZip, ccZipRegEx);
    validateInputs(ccCvv, ccCvvRegEx);
  }

  const notValid = document.querySelectorAll('.not-valid');
  if (notValid.length > 0) {
    e.preventDefault();
  }

});


onoffFocus.addEventListener('focus', (event)=>{
    event.target.style.background = "red";
});

onoffFocus.addEventListener('blur', (event)=>{
    event.target.style.background = '';
});