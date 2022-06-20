
function check(form1){
    if(form1.id.value == "11111"){
        press();
    }
    else{
       
        alert("invalid input.");
    }
}
function press(){
    document.getElementById('p').style.display = "block";
}