// HTML ELEMENTLERİNİN SEÇİMİ 
const btnDOM = document.getElementById('liveToastBtn');
const inputTask = document.getElementById('task');
const taskList = document.getElementById('list');
const liler = document.getElementsByTagName('li');


// create close button for delete list

let i = 0;
for (; i < liler.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    liler[i].append(closeButton);
    liler[i].onclick = check;
    closeButton.onclick = deleteBtn;
}

// eventlisteners

btnDOM.addEventListener('click', addItemToList);

function check() {
    this.classList.toggle("checked");
}
function deleteBtn() {
    this.parentElement.remove();
    localStorage.clear();
}

// add to items 

function addItemToList() {

    if (inputTask.value == "") {
        $(".error").toast("show");

    } else {
        $(".success").toast("show");
        let liDOM = document.createElement("li");
        taskList.appendChild(liDOM);
        liDOM.innerHTML = task.value;

        loadStorage(inputTask.value);


        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        liDOM.append(closeButton);
        taskList.append(liDOM);
        closeButton.onclick = deleteBtn;
    }
    inputTask.value = "";
}


function loadStorage(text) {
    let storage = JSON.parse(localStorage.getItem("items"));
    let items;
    if (storage == null) {
        items = [];
    } else {
        items = getStorage();
    }
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));

}

function getStorage() {
    let items = JSON.parse(localStorage.getItem("items"));
    items.forEach(item => {
        let liDOM = document.createElement("li");
        taskList.appendChild(liDOM);
        liDOM.innerHTML += item;

        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        liDOM.append(closeButton);
        taskList.append(liDOM);
        closeButton.onclick = deleteBtn;

    });

    localStorage.setItem('items', JSON.stringify(items));
    return items;
}

getStorage()


