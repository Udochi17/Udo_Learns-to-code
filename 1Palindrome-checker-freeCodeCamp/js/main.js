// Code was modelled from freeCodeCamp's demo application

const checkButton = document.getElementById('check-btn');   
const result = document.getElementById('result');
const userInput = document.getElementById('input-text');

const checkUserInput = (input) => {
   
   if (input === '') {
        alert('Please input a value');
        return;
    }

    result.replaceChildren();

    const modifyStr = input.replace(/[^A-Za-z0-9]/ig,'').toLowerCase();
    const strReverse = [...modifyStr].reverse().join('');
    const checker = modifyStr === strReverse ? 'is a palindrome' : 'is not a palindrome';
    const outputResult = `<strong>${input}</strong> ${checker}`;

    const userTag = document.createElement('p');
    userTag.className = 'user-input';
    userTag.innerHTML = outputResult;
    result.appendChild(userTag);
    result.classList.remove('hidden');

};

const arrCheck = () => {
    let array = [4, 1, 4, 3, 4];
    let countarr = [];
    
    array.forEach((elem1) => {
        let count = 0;
        for(let i = 0; i < 5; i++){
            let num1 = elem1;
            let num2 = array[i];
            let target = array.find(() => {
                num2 == num1;
            } )

            if(target){
                count++;
            }
        } // end of for loop
        if(count > 0){
            countarr.push([elem1, count])
        }
    })

    let countMap = countarr.map(([elem, count]) => {
        `${elem} appeared ${count} times`
    }).join('');

    console.log(countMap);
}

checkButton.addEventListener('click', () => {
    checkUserInput(userInput.value);
    arrCheck();
    userInput.value = 'mine';
    

});

userInput.addEventListener('keydown', e => {
    if ( e.key === 'Enter') {
        checkUserInput(userInput.value)
        userInput.value = '';
    }
}); 


