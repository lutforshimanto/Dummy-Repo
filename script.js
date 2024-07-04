document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('exampleFormControlInput1');
    const textareaInput = document.getElementById('exampleFormControlTextarea1');

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        if (emailInput.value.trim() === '' || textareaInput.value.trim() === '') {
            alert('Both fields are required!');
        } else {
            alert('Thank you for your submission!');
        }
    });
});
