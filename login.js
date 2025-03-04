document.getElementById("log-btn")
.addEventListener("click",
    function(event){
    event.preventDefault();

    const acn = document.getElementById("acn").value;

    const pin = document.getElementById("acpin").value;

    if(acn.length === 11){
     if(pin === "1234"){
      window.location.href="./main.html";
     }else{
        alert("Pin vul bai eda den - 1234")
     }
    }else{
        alert("Ac No 11 digit er baji");
    }


})