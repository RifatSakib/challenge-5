
//for first donation
document.getElementById("donat1-btn").addEventListener("click", function (event) {

    event.preventDefault();



    const donatAmountMoney = money("donate-amount1");
    console.log(donatAmountMoney);

    const instituteBalance = balance("institute-balance1");
    console.log(instituteBalance);

    const addResult = donatAmountMoney + instituteBalance;


    console.log(addResult);



    document.getElementById("institute-balance1").innerText = addResult;




    // subtract part

    const withdrawAmount = balance("balance");
    console.log(withdrawAmount);

    const subtractResult = withdrawAmount - donatAmountMoney;

    document.getElementById("balance").innerText = `${subtractResult} BDT`;






})


//for second donation

document.getElementById("donat2-btn").addEventListener("click", function (event) {
    event.preventDefault();




    const donatAmountMoney = money("donate-amount2");
    // console.log(donatAmountMoney);

    const instituteBalance = balance("institute-balance2");
    // console.log(instituteBalance);

    const addResult = donatAmountMoney + instituteBalance;


    // console.log(addResult);



    document.getElementById("institute-balance2").innerText = addResult;

    
    // subtract part

    const withdrawAmount = balance("balance");
    console.log(withdrawAmount);

    const subtractResult = withdrawAmount - donatAmountMoney;

    document.getElementById("balance").innerText = `${subtractResult} BDT`;

});




    //for Third donation


document.getElementById("donat3-btn").addEventListener("click", function (event) {
    event.preventDefault();




    const donatAmountMoney = money("donate-amount3");
    // console.log(donatAmountMoney);

    const instituteBalance = balance("institute-balance3");
    // console.log(instituteBalance);

    const addResult = donatAmountMoney + instituteBalance;


    // console.log(addResult);



    document.getElementById("institute-balance3").innerText = addResult;



       // subtract part



    const withdrawAmount = balance("balance");
    console.log(withdrawAmount);

    const subtractResult = withdrawAmount - donatAmountMoney;

    document.getElementById("balance").innerText = `${subtractResult} BDT`;

});