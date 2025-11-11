const addBtn = document.getElementById('add-btn');
const mainContainer = document.querySelectorAll('.container')[1];

function addTransaction() {
    console.log('a');
    const transaction = document.querySelector('input[type=text]');
    const amount = document.querySelector('input[type=number]');
    const type = document.querySelector('.type-select');
    
    
    if(!amount.value) alert('Invalid Number')
    
    const container = document.createElement('div');
    const p = document.createElement('p');
    const transValue = document.createTextNode(transaction.value);
    p.appendChild(transValue)

    container.classList.add('entry');
    container.appendChild(p)
    

    // Transcation Type

    if(type.value == 'income') {
        container.classList.add('income')
    }else {
        container.classList.add('expense')
    }


    mainContainer.appendChild(container)
}

addBtn.addEventListener('click', addTransaction)