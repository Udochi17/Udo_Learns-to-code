const userInput = document.getElementById('user-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const checkInput = input => {

    //const inputR = /^1?[1-9]{1,3}-[1-9]{1,3}-[1-9]{1,4} | ^1?\s?[(1-9)]{1,3}\s?[1-9]{1,3}-[1-9]{1,4} | ^1?\s?[1-9]{1,3}\s?[1-9]{1,3}\s?[1-9]{1,4}/;
    const inputRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    
    if (input === '' || input.match(/[e.]/s)){
        return alert('Please provide a phone number');
    } 

    let itemElement = document.createElement('p');
        itemElement.className = 'result-text'
        itemElement.style.color = `${inputRegex.test(input)?'darkgreen':'#ba0202'}`
        itemElement.innerText = `${inputRegex.test(input)? 'Valid' : 'Invalid'} US Number: ${input}`

        result.appendChild(itemElement);

}

const clearResult = () => {
    result.textContent = '';
    userInput.value = '';
}

/* const update = () => {
    const inValue = userInput.value;

    if (checkInput(inValue)) {

        result.innerHTML = `<p>${outputMsg}</p>`
    }
} */

checkBtn.addEventListener('click', () => {
    const value = userInput.value;
    checkInput(value);
    userInput.value = '';
});

clearBtn.addEventListener('click', clearResult); 

userInput.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    checkInput(userInput.value);
    userInput.value = '';
  }
})

/*const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('result');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
}); */