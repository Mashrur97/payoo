document.getElementById("addmoney")
.addEventListener("click", function(event){
event.preventDefault();

const amount = getValueById("amount");
const pin = getValueById("acpin");
const mbalance = getValueFromInner("teka");

if(pin && amount){
    if(pin === 1234){
        setInnerTxt("teka",mbalance+amount);

        const div = document.createElement("div");

        const formattedDate = new Date().toLocaleString();
        div.innerHTML = `
        
        <p>Added ${amount} from ${document.getElementById("acn").value} at ${formattedDate}</p>

        `;

        
        const x = document.getElementById("tbox");
        x.appendChild(div);
    }else{
        alert("wrong pin vau");
    }
}else{
 alert("empty text fields");
}

})