function cdis(){
    let val=document.getElementById("crdno").value;
    let val1= document.getElementById('cn').value;
    let l=val.length;
    let l1=val1.length;
    document.getElementById('cn').value=val+val1.substring(l,l1);
    if(l==5){
        l1=l1-1;
        val=" "+val;
    }        
}
function ndis(){
    let val=document.getElementById("fname").value;
    document.getElementById('fn').value=val
    if(l==5){
        l1=l1-1;
        val=" "+val;
    }        
}
function ddis(){
    let val=document.getElementById("doe").value;
    document.getElementById('de').value=val
    if(l==5){
        l1=l1-1;
        val=" "+val;
    }        
}
function cnn(){
    let val=document.getElementById("cvv").value;
    document.getElementById('cnn').value=val;
}