// console.log("hello from money increase");

function money(id) {
    const inputValue = document.getElementById(id).value;
    const result = parseFloat(inputValue);

    return result;


}

function balance(id) {
    const inputValue = document.getElementById(id).innerText;
    const result = parseFloat(inputValue);

    return result;


}

function add(money, balance){

    const addResult = money + balance;
    return addResult;
}