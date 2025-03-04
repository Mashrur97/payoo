function getValueById(id){
  return parseFloat(document.getElementById(id).value);
}
function getValueFromInner(id){
    return parseFloat(document.getElementById(id).innerText);
}
function setInnerTxt(id,value){
   document.getElementById(id).innerText = value;
}