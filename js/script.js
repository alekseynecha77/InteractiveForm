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


function validateForm() {

    let x = document.forms["myForm"]["user-name"].value;

    var regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;

    const email = document.getElementById('email');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 //name validation
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

        //email validation
    
        if(email.value.match(emailRegex)){
            return true;
             }else{
                alert("Please enter a valid email.");
                return false;
             }

//credit card validation
   if(ccNum.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter a valid credit card number.");
     return false;
     }
 
     
  
    }