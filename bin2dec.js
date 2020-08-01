const inputField = document.querySelector('.input-field');
const promptText = document.querySelector('.input-field-prompt-text small');
const convertBtn = document.querySelector('.convert-btn')
const result = document.querySelector('.result p');

function callPrompt() {
    let inputFieldValue = inputField.value;
    let validRegex = /[^0-1]/g;
    let testResult = validRegex.test(inputFieldValue);
    let decimalValue
    if (testResult == true) {
        inputField.classList.add('bad-input');
        promptText.style.opacity = '1';
        result.innerText = "0";
    } else {
        inputField.classList.remove('bad-input');
        promptText.style.opacity = '0';
        decimalValue = parseInt(inputFieldValue, 2);
        if (inputFieldValue !== '') {
            result.innerText = decimalValue;
        } else {
            result.innerText = "0";
        }
    }
}


inputField.addEventListener('input', callPrompt, false);
