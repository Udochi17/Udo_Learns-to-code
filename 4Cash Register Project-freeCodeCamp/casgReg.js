/* const resultDiv = document.getElementById('change-due');
const userInput = document.getElementById('user-input');
const purchaseBtn = document.getElementById('purchase-btn');
const itemPrize = document.getElementById('prize');
const cashInDrawer = document.getElementById('cid');

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

/*let currencyUnit = [
    ['PENNY', 0.01]
    ['NICKEL', 0.05]
    ['DIME', 0.1]
    ['QUARTER', 0.25]
    ['DOLLAR', 1]
    ['FIVE', 5]
    ['TEN', 10]
    ['TWENTY BOX', 20]
    ['HUNDRED BOX', 100]
];*

//Make input usable

const  convertInput = () => {
    const cash = parseFloat(userInput.value);
    let change = Number((cash - price).toFixed(2));
    const totalCID = cid.reduce((total, add) => total + add[1], 0);

    if (cash < price || input === '' ) {
        alert('Customer does not have enough money to purchase the item');
        userInput.value = '';
        return;
    } else if (cash === price) {
        resultDiv.innerHTML = `<p>No change due - customer paid with cash</p>`;
        userInput.value = '';
        return;
    }

    const denominations = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
    const denominationNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

    let changeArr = [];
    let cidCopy = [...cid];

    if( totalCID < change){
        resultDiv.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    }

    if( totalCID === change) {
        resultDiv.innerHTML = '<p>Status: CLOSED</p>'
    }

     for (let i = 0; i < denominations.length; i++) {
        let totalDenom = 0;
        while (change >= denominations[i] && cidCopy[cidCopy.length - 1 - i][1] > 0) {
          cidCopy[cidCopy.length - 1 - i][1] = Number((cidCopy[cidCopy.length - 1 - i][1] - denominations[i]).toFixed(2));
          change = Number((change - denominations[i]).toFixed(2));
          totalDenom += denominations[i];
        }

        if(totalDenom > 0) {
            changeArr.push([denominationNames[i], totalDenom]);
        }
    }

    if(change > 0) {
        resultDiv.innerHTML = 'Status: INSUFFICIENT_FUNDS';
        return;
    }

    let remainingCid = cidCopy.reduce((total, sum) => total + sum[1], 0);
    if (remainingCid === 0) {
      resultDiv.innerHTML = "Status: CLOSED " + changeArr.map(cash => `${cash[0]}: $${cash[1].toFixed(2)}`).join(" ");
      cid = cid.map(denom => [denom[0], 0]);
    } else {
      resultDiv.innerHTML = "Status: <b>OPEN</b> <br><br>" + changeArr.map(cash => `<b>${cash[0]}</b>: $${cash[1].toFixed(2)} <br>`).join(" ");
      cid = cidCopy;
    }
  
    displayCashInDrawer();
  
};

const displayCashInDrawer = () => {
    cashInDrawer.innerHTML = "<h4>Cash in Drawer:</h4>" + cid.map(cash => `${cash[0]}: $${cash[1].toFixed(2)} <br>`).reverse().join("");
  }
  
  window.onload = displayCashInDrawer;
  
  purchaseBtn.addEventListener("click", convertInput);
  
  cash.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      checkRegister();
    }
  });
  
  

const dueChange = diff => {
    checkInput(userInput.value);

    let result = [];
     currencyUnit.forEach( prop => {
        while(diff > prop[1]) {
           let value = diff - prop[1];
            result.push(value);
        }
    });

    let sTag = document.createElement('span');
    sTag.innerText = result.join('-');
    sTag.className = 'result-span';
}

purchaseBtn.addEventListener('click', () => {
    dueChange(userInput.value - price);
}); */


/* let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('user-input');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price');
const cashDrawerDisplay = document.getElementById('cid');

// Format results to work with
const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  displayChangeDue.innerHTML += change
    .map(
      ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
    )
    .join('');
};

//
const checkCashRegister = () => {
  const cashInCents = Math.round(Number(cash.value) * 100);
  const priceInCents = Math.round(price * 100);
  if (cashInCents < priceInCents) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (cashInCents === priceInCents) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = cashInCents - priceInCents;
  const reversedCid = [...cid]
    .reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);
  const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  const result = { status: 'OPEN', change: [] };
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  if (totalCID < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }
  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  
  // Update cid if change is passed in
  if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      const targetArr = cid.find(
        ([denominationName]) => denominationName === changeDenomination
      );
      targetArr[1] =
        (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) / 100;
    });
  }

  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
      )
      .join('')}
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();
 */

let price = 19.5;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


const moneyIn = document.getElementById('user-input');
const changeDisplay = document.getElementById('change-due');
const priceDisplay = document.getElementById('price');
const purchaseBtn = document.getElementById('purchase-btn');
const displayCID = document.getElementById('cid');

const getChange = () => {

  const cash = Number(moneyIn.value).toFixed(2);

  if(cash < price) {
    alert('Customer, your money no reach!');
    moneyIn.value = '';
    return;
  }

  if(cash === price){
    changeDisplay.innerHTML = '<p>Customer... You no get change</p>';
    moneyIn.value = "";
    return;
  }

  let customerChange = (cash - price).toFixed(2);

  const cidCopy = [...cid].reverse();
  const currency = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  const currencyName = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  const result = {status:'OPEN', change: [] };
  const totalCID = cidCopy.reduce((total, [_, sum]) => total + sum, 0);

  if (customerChange === totalCID){
    result.status = 'CLOSED';
  }

  if(totalCID < customerChange) {
    changeDisplay.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  for (let i = 0; i < cidCopy.length; i++){
      let unit = currency[i];
      let unitName = currencyName[i];
      let unitInPurse = cidCopy[i][1];

      if(customerChange >= unit && totalCID > 0) {
        let totalAmount = 0;

        while(customerChange >= unit && unitInPurse > 0){
            customerChange = (customerChange - unit).toFixed(2);
            unitInPurse = (unitInPurse - unit).toFixed(2);
            totalAmount += unit;
        }

        if(totalAmount > 0){
          result.change.push([unitName, totalAmount]);
      }

      } // end of condition

    } // end of loop
  

  if (customerChange > 0) {
    changeDisplay.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if(!moneyIn){
    return;
  }

  getChange();
};

const formatResults = (status, change) => {
  changeDisplay.innerHTML = `<p>Status: ${status}</p>`;
  changeDisplay.innerHTML += change.map(([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`).join('');
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };

  if(change) {
    change.forEach(([changeDenom, changeAmount]) => {
      const targetArr = cid.find(([denomName]) => denomName === changeDenom);

      targetArr[1] = targetArr[1] - changeAmount;
    });
  }

  moneyIn.value = '';
  priceDisplay.textContent = `Total: $${price}`;
  displayCID.innerHTML = `<p><strong>Change in drawer:</strong></p>
  
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $ ${amount.toFixed(2)}</p>`
      )
      .join('')}
  `;
};

purchaseBtn.addEventListener('click', getChange);
moneyIn.addEventListener('keydown', e => {
  if(e.key == 'Enter'){
    getChange();
  }
});

updateUI();
/*






let price = 3.26;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


const moneyIn = document.getElementById('user-input');
const changeDisplay = document.getElementById('change-due');
const priceDisplay = document.getElementById('price');
const purchaseBtn = document.getElementById('purchase-btn');
const displayCID = document.getElementById('cid');



const getChange = (input) => {

  let cash = Number(input.value).toFixed(2);
  let changeDue = (cash - price).toFixed(2);

  if(cash < price){
      alert('Customer, you money no reach!');
      input.value = '';
      return;
  } else if ( cash == price ){
      alert(
        `Customer, you no get change, Thank you!`);
        input.value = '';
      return;
  } else if (!input.value) return;


  cidcopy = [...cid].reverse();
  result = { Status: 'OPEN', ChangeArr: [] };
  const currency = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  const currencyName = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  const totalCID = cidcopy.reduce((total, [_, sum]) => total + sum, 0);

  console.log(totalCID);

  if (changeDue === totalCID){
    result.Status = 'CLOSED';
  } 
  
  if (totalCID < changeDue) {
    changeDisplay.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }


  for(let i = 0; i < cidcopy.length; i++){
    let unit = currency[i];
    let unitName = currencyName[i];
    let amountInPurse = cidcopy[i][1];

    if(changeDue >= unit && totalCID > 0){
      let totalAmount = 0;

      while(changeDue >= unit && amountInPurse > 0){
        amountInPurse = (amountInPurse - unit).toFixed(2);
        changeDue = (changeDue - unit).toFixed(2);
        totalAmount += unit;
      } // end of while loop

      
    if( totalAmount > 0) {
      result.ChangeArr.push([unitName, totalAmount]);
    } 

    } // end of if-statement

  } // end of for loop

  if( changeDue > 0 ){
    changeDisplay.innerHTML = '<p>STATUS: INSUFFICIENT_FUNDS</p>';
    return;
  }


  formatResults(result.Status, result.ChangeArr);
  updateUI(result.ChangeArr);

} 

const formatResults = (status, change) =>{
  changeDisplay.innerHTML = `<p>Status: ${status}</p>`;
  changeDisplay.innerHTML += change.map(([unit, amount]) => `<p>${unit}:  $${amount}</p>` ).join('');
}

const updateUI = (change) => {

  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };

  if(change){
      change.forEach(([unitName, amount]) => {
      const targetArr = cid.find(([denomName]) => denomName === unitName );

      targetArr[1] = targetArr[1] - amount;
    }); 
  }

  moneyIn.value = '';
  priceDisplay.innerHTML = `Total: ${price}`;

  displayCID.innerHTML = `<h4>Cash In Drawer:</h4> 
    ${cid.map(([unitName, amount]) => `<p>${currencyNameMap[unitName]}: $${amount.toFixed(2)}</p>`).join('') }`;
}

purchaseBtn.addEventListener('click', () => {
  console.log(cid.reduce((total, sum) => total + sum[1], 0));
  getChange(moneyIn)
});
moneyIn.addEventListener('keydown', e => {
    if(e.key =='Enter') {
      getChange(moneyIn);
    }
  })
updateUI();*/