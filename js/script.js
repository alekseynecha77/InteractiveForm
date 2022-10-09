
window.onload = function() {
    document.getElementById('name').focus();
  }

  
const e = document.getElementById("title");

e.addEventListener('click', ()=>{
var value = e.value;
if(value === 'other'){

   document.getElementById('other-job-role').style.display = "none";
}else{
    document.getElementById('other-job-role').style.display = "block";

}

})