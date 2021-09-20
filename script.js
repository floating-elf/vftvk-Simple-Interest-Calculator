//computing interest
function compute() {
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = (principal*rate*years/100);  //calculate interest
    var year = new Date().getFullYear() + parseInt(years); //calculate year
    
    //fill the empty span
    document.getElementById('result').innerHTML = 'If you deposit <mark>'+principal+'</mark>,<br>at an interest rate of <mark>'+rate+'%</mark>.<br>You will receive an amount of <mark>'+interest+'</mark>,<br>in the year <mark>'+year+'</mark>';
}

//changing rate slider value
function updateRate() {
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerHTML = rateval+'%';
}

//validation for amount
function validatePrincipal() {
    var p = document.getElementById('principal').value;
    if (p <= 0){
        alert('Enter a positive number');
        principal.focus();
        return false
    } else{
        return true
    }
}
