

const tipCalculator = (value) =>{
    let bill = document.getElementById('bill');
    let people = document.getElementById('people');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');
    let tipAmount = document.getElementById('tip-amount');
    let reset = document.getElementById('reset');
    let error = document.getElementById('error');

   

    if(people.value=="0"){
        people.classList.add("error-border");
        error.classList.remove('hidden');
    }else if(people.value==""){
        people.classList.add("error-border");
        error.classList.remove('hidden');
    }else{
        reset.classList.remove('disabled');
        people.classList.remove("error-border");
        error.classList.add('hidden');
        if(value=="custom" && !tip.value==""){
            value = value=="custom" ? tip.value/100 : value;
            tipAmount.innerHTML = (value*bill.value/people.value).toFixed(2);
            total.innerHTML = ((parseFloat(bill.value)+parseFloat(tipAmount.innerHTML))/people.value).toFixed(2);
        }else if(value!="custom"){
            tipAmount.innerHTML = (value*bill.value/people.value).toFixed(2);
            total.innerHTML = (parseFloat(bill.value/people.value)+parseFloat(tipAmount.innerHTML)).toFixed(2);
        }
    }

}

const resetFields = () =>{
    let bill = document.getElementById('bill');
    let people = document.getElementById('people');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total');
    let tipAmount = document.getElementById('tip-amount');
    let error = document.getElementById('error');
    let customTip = document.getElementById('custom-tip');
    reset.classList.add('disabled');
    bill.value="";
    people.value="";
    tip.value="";
    total.innerHTML="0.00";
    tipAmount.innerHTML="0.00";
    people.classList.remove("error-border");
    error.classList.add('hidden');
    customTip.classList.remove('hidden');
    tip.classList.add('hidden');
    
}


const customTip = () =>{
    let tip = document.getElementById('tip');
    let customTip = document.getElementById('custom-tip');

    customTip.classList.add('hidden');
    tip.classList.remove('hidden');
}