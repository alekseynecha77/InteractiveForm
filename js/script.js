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
     const emailInput = email.value;

    const validatonforEmail =/^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput); //it will test emailinput for true or false
    
    if(!validatonforEmail){
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
function validateActivities(){
let arr = [];

for( i = 0; i<checkBoxes.length; i++){
    arr += checkBoxes[i].checked;
}
if(arr.includes(true)){
    activities.parentElement.classList.remove("not-valid");
    activities.parentElement.classList.add("valid");
    activities.parentElement.lastElementChild.style.display = "none";

    return true;
}else{
    activities.parentElement.classList.add("not-valid");
    activities.parentElement.classList.remove("valid");
    activities.parentElement.lastElementChild.style.display = 'block';
    return false;
}
}

function validatePayment(){

    //here we add regular expression validation

let arr = [];
const ccNumValue = ccNum.value;
const ccNumRegex = /^[0-9]{13,16}$/;
arr += ccNumRegex.test(ccNumValue);

const ccZipValue = ccZip.value;
const ccZipRegEx = /^[0-9]{5}$/;
arr += ccZipRegEx.test(ccZipValue);

const ccCvvValue = ccCvv.value;
const ccCvvRegEx = /^[0-9]{3}$/;
arr += ccCvvRegEx.test(ccCvvValue);

if(paymentOption.value === 'credit card' || paymentOption === "select option"){

    //here we add style if the error founded
if(!ccNumRegex.test(ccNumValue)){
        // match regular expression

    ccNumValue.parentElement.classList.remove("not-valid");
    ccNumValue.parentElement.classList.add("valid");
    ccNumValue.parentElement.lastElementChild.style.display = "none";
    ccNumValue.parentElement.classList.remove("error");
    
}    else{
    //didnt match regular expression
    ccNumValue.parentElement.classList.add("not-valid");
    ccNumValue.parentElement.classList.remove("valid");
    ccNumValue.parentElement.lastElementChild.style.display = "none";
    ccNumValue.parentElement.classList.add("error");
}

if(!ccZipRegEx.test(ccZipValue)){
     // match regular expression
    ccZipValue.parentElement.classList.remove("not-valid");
    ccZipValue.parentElement.classList.add("valid");
    ccZipValue.parentElement.lastElementChild.style.display = "none";
    ccZipValue.parentElement.classList.remove("error");
   
}    
else{
     //didnt match regular expression
    ccZipValue.parentElement.classList.add("not-valid");
    ccZipValue.parentElement.classList.remove("valid");
    ccZipValue.parentElement.lastElementChild.style.display = "none";
    ccZipValue.parentElement.classList.add("error");
}

if(!ccCvvRegEx.test(ccCvvValue)){
      // match regular expression
    ccCvvValue.parentElement.classList.remove("not-valid");
    ccCvvValue.parentElement.classList.add("valid");
    ccCvvValue.parentElement.lastElementChild.style.display = "none";
    ccCvvValue.parentElement.classList.remove("error");
}    else{
         //didnt match regular expression

    ccCvvValue.parentElement.classList.add("not-valid");
    ccCvvValue.parentElement.classList.remove("valid");
    ccCvvValue.parentElement.lastElementChild.style.display = "none";
    ccCvvValue.parentElement.classList.add("error");
}

if(arr.includes(false)) {

    return false;
    }

}
return true;
}



form.addEventListener('submit', e =>{

let arr = [];
arr.push(validateName());
arr.push(validateEmail());
arr.push(validatePayment());
arr.push(validateActivities());

if(arr.includes(false)) {
e.preventDefault();
}

})


   









