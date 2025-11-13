const addBtn = document.getElementById('add-btn');
const mainContainer = document.querySelectorAll('.container')[1];
const amount = document.querySelector('input[type=number]');
const balance = document.getElementById('balance');
const transaction = document.querySelector('input[type=text]');  
const type = document.querySelector('.type-select'); 


function addTransaction() {
    const container = document.createElement('div');
    const descriptionElement = document.createElement('p');
    const transValue = document.createTextNode(transaction.value);
    descriptionElement.appendChild(transValue)

    container.classList.add('entry');
    container.appendChild(descriptionElement)
    

    // Transcation Type

    if(type.value == 'income') {
        container.classList.add('income')
    }else {
        container.classList.add('expense')
    }

    // Add the Amount

    if(!amount.value) alert('Invalid Number');

    const amountContainer = document.createElement('div');
    const amountElement = document.createElement('p');
    const amountValue = document.createTextNode(`$${amount.value}`);
    amountElement.appendChild(amountValue);

    amountElement.classList.add('amount');
    amountContainer.appendChild(amountElement);

    // Delete Button
    const delButton = document.createElement('button');
    const delButtonText = document.createTextNode('Delete');
    delButton.appendChild(delButtonText);
    delButton.setAttribute('onclick', 'deleteThis(this)')
    
    amountContainer.appendChild(delButton)


    // Appending Elements
    container.appendChild(amountContainer)
    mainContainer.appendChild(container);

    // Updating the Balance
    balanceTotal();

    transaction.value = "";
    amount.value = "";
}

addBtn.addEventListener('click', addTransaction);


// Sum the Balance

let totalBalance = 0;
function balanceTotal() {
    
    

    if(type.value == 'income') {
        totalBalance += +amount.value;
    }else {
        totalBalance -= +amount.value;
    }

    balance.innerText = totalBalance;
}

// Delete Transaction

function deleteThis(e) {
    const mainElement = e.parentElement.parentElement;
    mainElement.remove();
}