let myLibrary = [];

const booksDiv = document.querySelector('#books');

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  const divEl = document.createElement('div');
  divEl.classList.add('book-item');

  const nameEl = document.createElement('h4');
  const authorEl = document.createElement('h4');
  const pagesEl = document.createElement('h4');
  const readEl = document.createElement('button');
  const removeEl = document.createElement('button');

  readEl.classList.add('btn-primary');
  removeEl.classList.add('btn-primary');

  nameEl.textContent = name;
  authorEl.textContent = author;
  pagesEl.textContent = pages;
  readEl.textContent = read;
  removeEl.textContent = 'Remove';

  readEl.addEventListener('click', changeReadStatus);
  removeEl.addEventListener('click', removeFromLibrary);

  divEl.appendChild(nameEl);
  divEl.appendChild(authorEl);
  divEl.appendChild(pagesEl);
  divEl.appendChild(readEl);
  divEl.appendChild(removeEl);
  booksDiv.appendChild(divEl);

  const bookObj = new Book(name, author, pages, read);
  myLibrary.push(bookObj);

  divEl.setAttribute('data-id', myLibrary.length - 1);
}

function renderLibrary() {
  const oldLibrary = myLibrary;
  myLibrary = [];
  booksDiv.innerHTML = `        
  <div id="header">
    <h3>Name</h3>
    <h3>Author</h3>
    <h3>Pages</h3>
    <h3>Status</h3>
    <button id="add-book-btn" class="btn-primary">Add a Book</button>
  </div>`;
  for (let item of oldLibrary) {
    addBookToLibrary(item.name, item.author, item.pages, item.read);
    console.log(item);
  }
}

function removeFromLibrary(e) {
  const bookIndex = e.target.parentElement.getAttribute('data-id');
  myLibrary.splice(bookIndex, 1);
  renderLibrary();
}

function changeReadStatus(e) {
  const bookIndex = e.target.parentElement.getAttribute('data-id');
  if (myLibrary[bookIndex].read == 'Read') {
    myLibrary[bookIndex].read = 'Unread';
  } else {
    myLibrary[bookIndex].read = 'Read';
  }
  renderLibrary();
}

addBookToLibrary('Kitap-1', 'BF', '485', 'Read');
addBookToLibrary('Kitap-2', 'BF', '548', 'Read');
addBookToLibrary('Kitap-3', 'BF', '846', 'Read');
addBookToLibrary('Kitap-4', 'BF', '135', 'Read');
renderLibrary();
