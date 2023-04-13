let myLibrary = [];

const booksDiv = document.querySelector('#books');
const addBookBtn = document.querySelector('#add-book-btn');
const modal = document.querySelector('#add-book-modal');
const bgBlock = document.querySelector('#background-block');
const closeModalBtn = document.querySelector('#close-modal');
const submitBook = document.querySelector('#submit-book');

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
  booksDiv.innerHTML = ``;
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

// Add book modal
function openModal() {
  modal.classList.toggle('hide');
  bgBlock.classList.toggle('hide');
}

function closeModal(e) {
  e.preventDefault();
  modal.classList.toggle('hide');
  bgBlock.classList.toggle('hide');
}

function submitToLibrary() {}

addBookBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
submitBook.addEventListener('click', submitToLibrary);

addBookToLibrary('Kitap-1', 'BF', '485', 'Read');
addBookToLibrary('Kitap-2', 'BF', '548', 'Read');
addBookToLibrary('Kitap-3', 'BF', '846', 'Read');
addBookToLibrary('Kitap-4', 'BF', '135', 'Read');
renderLibrary();
