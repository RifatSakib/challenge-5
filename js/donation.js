document.getElementById("donat1-btn").addEventListener("click", function(event){

    event.preventDefault();
//for first donation
 
   
    const donatAmountMoney =  money("donate-amount1");
    console.log(donatAmountMoney);

    const instituteBalance = balance("institute-balance1");
    console.log(instituteBalance);

    const addResult = donatAmountMoney + instituteBalance;

    
    console.log(addResult);



    document.getElementById("institute-balance1").innerText = addResult;

// //for second donation

// const donatAmountMoney2 =  money("donate-amount2");
// // console.log(donatAmountMoney);

// const instituteBalance2 = balance("institute-balance2");
// // console.log(instituteBalance);

// const addResult2 = donatAmountMoney2 + instituteBalance2;


// // console.log(addResult);



// document.getElementById("institute-balance1").innerText = addResult2;


    // sutraction part


    //for first donation


    const withdrawAmount = balance("balance");
    console.log(withdrawAmount);

    const subtractResult = withdrawAmount - donatAmountMoney;

    document.getElementById("balance").innerText = `${subtractResult} BDT`;


    //  //for second donation

    
    //  const withdrawAmount2 = balance("balance");
    //  console.log(withdrawAmount2);
 
    //  const subtractResult2 = withdrawAmount2 - donatAmountMoney2;
 
    //  document.getElementById("balance").innerText = `${subtractResult2} BDT`;


    
})