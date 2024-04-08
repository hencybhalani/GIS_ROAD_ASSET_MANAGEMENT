

document.addEventListener("DOMContentLoaded", function () {
    // Get references to the radio buttons and form content divs
    var citizenRadio = document.querySelector('input[value="option1"]');
    var contractorRadio = document.querySelector('input[value="option2"]');
    var citizenForm = document.getElementById('contentOption1');
    var contractorForm = document.getElementById('contentOption2');

    // Function to show citizen form and hide contractor form
    function showCitizenForm() {
        citizenForm.style.display = 'block';
        contractorForm.style.display = 'none';
    }

    // Function to show contractor form and hide citizen form
    function showContractorForm() {
        contractorForm.style.display = 'block';
        citizenForm.style.display = 'none';
    }

    // Initially hide contractor form
    contractorForm.style.display = 'none';

    // Add event listeners to radio buttons
    citizenRadio.addEventListener('change', showCitizenForm);
    contractorRadio.addEventListener('change', showContractorForm);
});

