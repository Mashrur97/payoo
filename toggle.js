document.getElementById("cashout").style.display = "none";
document.getElementById("tbox").style.display = "none";

document.getElementById("addbox").addEventListener("click", function(){

    document.getElementById("addM").style.display = "block";
    document.getElementById("cashout").style.display = "none";

})
document.getElementById("cashbox").addEventListener("click", function(){

    document.getElementById("addM").style.display = "none";
    document.getElementById("cashout").style.display = "block";

})

document.getElementById("t").addEventListener("click", function(){
    document.getElementById("addM").style.display = "none";
    document.getElementById("tbox").style.display = "block";
    document.getElementById("cashout").style.display = "none";

})