const form = document.getElementById('Registro');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const tableBody = document.getElementById('tableBody'); 

let data = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;

    if(name && email) {
        const newData = {name, email};
        data.push(newData);
        renderTable();
        form.reset();
    } else {
        alert('Todos los datos son obligatorios');
    }
})

function renderTable() {
    tableBody.innerHTML = '';

    data.forEach(function(item, index){
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const actionCell = document.createElement('td');
        const ediButton = document.createElement('button');
        const eliButton = document.createElement('button');

        nameCell.textContent = item.name;
        emailCell.textContent = item.email;
        ediButton.textContent = 'Editar';
        eliButton.textContent = 'Eliminar';

        ediButton.addEventListener('click', function(){
            ediData(index);
        })

        eliButton.addEventListener('click', function(){
            eliData(index);
        })

        actionCell.appendChild(ediButton);
        actionCell.appendChild(eliButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    })
}

function ediData(index){
    const item = data[index];
    nameInput.value = item.name;
    emailInput.value = item.email;
    data.splice(index, 1);
    renderTable();
}

function eliData(index){
    data.splice(index, 1);
    renderTable();
}
