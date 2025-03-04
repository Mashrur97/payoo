document.getElementById("cashbtn")
.addEventListener("click", function(event){
event.preventDefault();

const amount = parseFloat(document.getElementById("C-amount").value);
const pin = parseFloat(document.getElementById("C-acpin").value);
const mbalance = parseFloat(document.getElementById("teka").innerText);

if(pin && amount){
    if(pin === 1234){
    document.getElementById("teka").innerText = (mbalance-amount);

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
