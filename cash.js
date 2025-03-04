document.getElementById("cashbtn")
.addEventListener("click", function(event){
event.preventDefault();

const amount = parseFloat(document.getElementById("C-amount").value);
const pin = parseFloat(document.getElementById("C-acpin").value);
const mbalance = parseFloat(document.getElementById("teka").innerText);

if(pin && amount){
    if(pin === 1234){
    document.getElementById("teka").innerText = (mbalance-amount);
    }else{
        alert("wrong pin vau");
    }
}else{
 alert("empty text fields");
}

})