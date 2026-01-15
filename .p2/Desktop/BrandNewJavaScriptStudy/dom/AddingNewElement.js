function add() {
    const parentElement = document.getElementById('list');
    const newElement = document.createElement('li');
    newElement.textContent = 'Item 4';

    parentElement.appendChild(newElement);
}
