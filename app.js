const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const clickButton = document.querySelector("#click-btn");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const errorMessage = document.querySelector("#error-message");

const availableNotes = [2000,500,200,100,50,20,10,5,2,1];

hideMessage()

clickButton.addEventListener('click', function validateBillAndCashAmount()
{hideMessage();
    const billAmt = Number(billAmount.value);
   const cashGvn  = Number(cashGiven.value);
 if(billAmt>0)
 {
     if(cashGvn > 0)
     {
      if(cashGvn>=billAmt)
      {
      const amountToBeReturned = cashGvn - billAmt;
      calculateChange(amountToBeReturned);    

      }else{showMessage("Do you want to wash dishes ?")}   
     }else{showMessage("error:- Invalid Cash Given Amount.")}
 }else { showMessage("error:- Invalid Bill Amount.")}
});

function hideMessage(){
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned){
    for (let i = 0 ; i <availableNotes.length;i++)
    {
        const noOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        numberOfNotes[i].innerText = noOfNotes ; 
    }
}

function showMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
 }