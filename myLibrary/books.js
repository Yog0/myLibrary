let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: '265',
        read: 'not read yet'
    }
];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }
}

function addBookToLibrary () {
    // todo
}

function displayBooks () {
    // todo
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
  }

  function generateTable(table, data) {
      for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
              let cell = row.insertCell();
              let text = document.createTextNode(element[key]);
              cell.appendChild(text);
          }
      }
  }

  let table = document.querySelector("table");
  let data = Object.keys(myLibrary[0])
  generateTable(table, myLibrary);
  generateTableHead(table, data);