function validation(donation, balance) {

    

    if(balance < 0 || balance < donation){
        alert("You dont have enough funds to make this transaction");

        return;

    }

    if(isNaN(donation) || donation < 0){
        alert('please enter a valid donation amount');
        return;
    }

    else {

        alert('Donation Successful,Thank You!');

       const values = [donation,balance]

        return values;





    }



}