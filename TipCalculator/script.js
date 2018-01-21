function calculateTip(){
    //fetching data from html tags
    var billAmount=document.getElementById("billAmount").value;
    var numPeople=document.getElementById("totalPeople").value;
    var serviceQuality=document.getElementById("serviceQuality").value;
    
    
    
    if(billAmount===""){
        document.getElementById("billAmount").style.border="solid 1px red";
        return;
    }
    if(numPeople=="" || numPeople<=1){
        numPeople=1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }
    //do some calculations
    var total=(billAmount * serviceQuality)/numPeople;
    total=total.toFixed(2);
    document.getElementById("tip").innerHTML=total;
    document.getElementById("totalTip").style.display="block";
}

document.getElementById("totalTip").style.display="none";

//va a=45;
//var b="45";
//same for interpretor;

//if(a==b) true
//if(a===b) type matches false