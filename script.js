
const form = document.querySelector('form');
const input = form.querySelector('input');
const resultBox = document.querySelector('#todos');
let defaultData = [];

form.addEventListener('submit', (e) =>{
    e.preventDefault();
const inputValue = input.value.trim();

// seting data to localstorage 
if (inputValue != '' && !defaultData.includes(inputValue)) {
    setData(inputValue);
}
input.value = '';
});


// calling print function for print localStorage previous value 
if (localStorage.getItem('todos') != null) { 
    printData();
}

// caaling remove function
resultBox.addEventListener('click', (e) =>{
let item = e.target;
if (item != resultBox) {
    let itemText = item.innerText;
    removeData(itemText);
}

})


// function for seting Data 
function setData(data){
    
    // seting default data to local storage data 

    // seting Default Data 
    if (localStorage.getItem('todos') == null) { 
    localStorage.setItem('todos', JSON.stringify(defaultData));
    }

    // seting the default data to new data 
    if (localStorage.getItem('todos') != null) {
        defaultData = JSON.parse(localStorage.getItem('todos'));
    }

    // fushing the new  data 
    defaultData.push(data);
    localStorage.setItem('todos', JSON.stringify(defaultData));

    printData();
}

//function for print Data
function printData(){
    defaultData = JSON.parse(localStorage.getItem('todos'));
 resultBox.innerHTML = '';
    defaultData.forEach(todo => {
        resultBox.innerHTML += `<li>${todo}</li>`;
    });
}

//function for removeData
function removeData(itemtodo){
   defaultData = JSON.parse(localStorage.getItem('todos'));
   defaultData.splice(defaultData.indexOf(itemtodo), 1);
   localStorage.setItem('todos', JSON.stringify(defaultData));

   printData();
}

