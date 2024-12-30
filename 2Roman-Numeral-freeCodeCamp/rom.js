const userInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const resultOutput = document.getElementById('output');

function convertValue (num) {
    const outputValues = {
        'M':1000, 
        'CM':900, 
        'D':500, 
        'CD':400, 
        'C':100, 
        'XC':90, 
        'L':50, 
        'XL':40, 
        'X':10, 
        'IX':9, 
        'V':5, 
        'IV':4, 
        'I':1 };

       let result = '';

        for (let int in outputValues) {
            while (num >= outputValues[int]) {
                result += int;
                num -= outputValues[int];
            }; 
        };

         return result;
};

function checkUserInput (input) {
    let dispErr = '';

    if (input === ''|| input.match(/[e.]/g)) {
        dispErr = 'Please enter a valid number.';
    } else if (input < 1 ) {
        dispErr= 'Please enter a number greater than or equal to 1.';
    } else if (input > 3999) {
        dispErr = 'Please enter a number less than or equal to 3999.';
    } else {
        resultOutput.classList.add('result-div');
        return true;
    }

    resultOutput.innerText = dispErr;
    resultOutput.classList.add('alert');
    return false;
};

function clearMsg () {
    resultOutput.innerText = '';
    resultOutput.classList.remove('alert');
    resultOutput.classList.remove('result-div');
}

function execute () {
        const value = userInput.value;
        resultOutput.classList.remove('hidden');

        clearMsg();

        if(checkUserInput(value)) {
            resultOutput.innerText = convertValue(value);
        }

};

convertBtn.addEventListener('click', () => {
    execute();
});
