// Set Variables
const select = document.querySelector('select');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const gramsOutput = document.getElementById('gramsOutput');
const kgOutput = document.getElementById('kgOutput');
const ozOutput = document.getElementById('ozOutput');
const gramsBlock = document.getElementById('grams-block');
const kgBlock = document.getElementById('kilograms-block');
const ozBlock = document.getElementById('ounce-block');

// Event Listeners
select.addEventListener('click', selectChange);
input.addEventListener('input', getInput);

// Hide Output
output.style.visibility = 'hidden';

// Function Call
function getInput() {
    output.style.visibility = 'visible';
    const inputValue = input.value;
    gramsOutput.innerHTML = inputValue / 0.0022046;
    kgOutput.innerHTML = inputValue / 2.2046;
    ozOutput.innerHTML = inputValue * 16;
}

function selectChange() {
    const inputValue = input.value;
    output.style.visibility = 'visible';
    if (select.value == 'grams') {
        gramsBlock.style.display = 'none';
        kgBlock.style.display = 'block';
        ozBlock.style.display = 'block';
        kgOutput.innerHTML = inputValue / 2.2046;
        ozOutput.innerHTML = inputValue * 16;
    } else if (select.value == 'kilograms') {
        kgBlock.style.display = 'none';
        gramsBlock.style.display = 'block';
        ozBlock.style.display = 'block';
        gramsOutput.innerHTML = inputValue / 0.0022046;
        ozOutput.innerHTML = inputValue * 16;
    } else if (select.value == 'ounce') {
        ozBlock.style.display = 'none';
        kgBlock.style.display = 'block';
        gramsBlock.style.display = 'block';
        gramsOutput.innerHTML = inputValue / 0.0022046;
        kgOutput.innerHTML = inputValue / 2.2046;
    } else {
        ozBlock.style.display = 'block';
        gramsBlock.style.display = 'block';
        kgBlock.style.display = 'block';
        gramsOutput.innerHTML = inputValue / 0.0022046;
        kgOutput.innerHTML = inputValue / 2.2046;
        ozOutput.innerHTML = inputValue * 16;
    }
}