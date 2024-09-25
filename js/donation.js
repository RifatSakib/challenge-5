
//for first donation
document.getElementById("donat1-btn").addEventListener("click", function (event) {

    event.preventDefault();


    const name = document.getElementById("noyakhali").innerText;


    const donatAmountMoney = money("donate-amount1");

    const instituteBalance = balance("institute-balance1");

    const mainBalance = balance("balance");


     //   validation part start
    const validResult = validation(donatAmountMoney, mainBalance);

   //   validation part end




    const addResult = validResult[0] + instituteBalance;

    document.getElementById("institute-balance1").innerText = addResult;

     // add to transaction history
     const p = document.createElement('p');
     p.innerText = ` ${validResult[0]} Tk. is donated for ${name} New Balance: ${validResult[1]} Tk}`;
     console.log(p); 

     // should be a common function
     document.getElementById('transaction-container').appendChild(p);




    // subtract part



    const subtractResult = validResult[1] - validResult[0];

    document.getElementById("balance").innerText = `${subtractResult} BDT`;






})


//for second donation

document.getElementById("donat2-btn").addEventListener("click", function (event) {
    event.preventDefault();


    const mainBalance = balance("balance");


   
    const donatAmountMoney = money("donate-amount2");

    const instituteBalance = balance("institute-balance2");



     //   validation part start
    const validResult = validation(donatAmountMoney, mainBalance);

   //   validation part end




    const addResult = validResult[0] + instituteBalance;

    document.getElementById("institute-balance2").innerText = addResult;




    // subtract part



    const subtractResult = validResult[1] - validResult[0];

    document.getElementById("balance").innerText = `${subtractResult} BDT`;




});




//for Third donation


document.getElementById("donat3-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance = balance("balance");



    const donatAmountMoney = money("donate-amount3");

    const instituteBalance = balance("institute-balance3");



     //   validation part start
    const validResult = validation(donatAmountMoney, mainBalance);

   //   validation part end




    const addResult = validResult[0] + instituteBalance;

    document.getElementById("institute-balance3").innerText = addResult;




    // subtract part



    const subtractResult = validResult[1] - validResult[0];

    document.getElementById("balance").innerText = `${subtractResult} BDT`;

});