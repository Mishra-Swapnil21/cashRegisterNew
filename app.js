const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const clickButton = document.querySelector("#click-btn");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const errorMessage = document.querySelector("#error-message");

const availableNotes = [2000,500,200,100,50,20,10,5,2,1];



clickButton.addEventListener("click" , function validateBillAndCashAmount() {
    if(billAmount.value > 0){
        hideMessage();
        if(cashGiven.value>=billAmount.value){
            const AmountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(AmountToBeReturned)
            
        }
        else {
            showMessage("Do you want to wash dishes ?");
        }
    }
    else {
        showMessage("error:- Invalid Bill Amount");
    }
});   



function hideMessage(){
    errorMessage.style.display = "none";
}

function calculateChange(amountToBereturned){
    for (let i = 0 ; i <availableNotes.length;i++)
    {
        const noOfNotes = Math.trunc(amountToBereturned/availableNotes[i]);
        amountToBereturned = amountToBereturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes ; 
    }
}


function showMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}