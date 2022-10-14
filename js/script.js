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

paymentOption.addEventListener("change", e=> {
    paymentType = e.target.value;
    if (paymentType === "credit-card") {
        creditPayment.removeAttribute('hidden', '');
        paypalPayment.setAttribute('hidden', '');
        bitcoinPayment.setAttribute('hidden', '');
    } else if (paymentType === "paypal") {
        creditPayment.setAttribute('hidden', '');
        paypalPayment.removeAttribute('hidden', '');
        bitcoinPayment.setAttribute('hidden', '');
    } else if (paymentType === "bitcoin") {
        creditPayment.setAttribute('hidden', '');
        paypalPayment.setAttribute('hidden', '');
        bitcoinPayment.removeAttribute('hidden', '');
    }
})


function cardnumber()
{
    let arr = [];
    const ccNumValue = ccNum.value;
    var cardno = /^[0-9]{13,16}$/;;
    arr += cardno.test(ccNumValue);
    if(paymentOption.value === "credit-card" || paymentOption.value === "select method") {

    if(!ccNumRegex.test(ccNumValue)) {
        ccNum.parentElement.classList.add("not-valid");
        ccNum.parentElement.classList.remove("valid");
        ccNum.parentElement.lastElementChild.style.display = "block"; 
        ccNum.classList.add("error")
    } else {
        ccNum.parentElement.classList.add("valid");
        ccNum.parentElement.classList.remove("not-valid");
        ccNum.parentElement.lastElementChild.style.display = "none"; 
        ccNum.classList.remove("error")
    }

 if(arr.includes(false)) {
            return false;
        }

    }
return true;

}
form.addEventListener("submit",e=> {
    let arr = [];
    arr += validateName();
    arr += validateEmail();
    arr += validateActivities();
    arr += validatePayment();
    if(arr.includes(false)) {
        e.preventDefault();
    }
   
})

cardnumber();

function paymentCC() {
    paymentOption.selectedIndex = 1;
}

paymentCC();