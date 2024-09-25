document.getElementById('donat-btn-main')
    .addEventListener('click', function () {
        showSectionById('card-section');
    });

document.getElementById('history-btn-main')
    .addEventListener('click', function () {

        showSectionById('transaction');

    })






function showSectionById(id){
    // hide all the sections
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');
    

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}