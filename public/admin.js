
// Your Code Here


// async function update(){
//   let response = await fetch('http://localhost:3001/updateBook', {
//     method:'PATCH',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         "id": 3,
//         "title": "The Legends of Arathrae"
//         })
// });

//   let updateBook = await response.json();

//   console.log(updateBook)
// }

// update()

//retrieve a list of books fron the server
async function retrieveBookList (){
  let response = await fetch('http://localhost:3001/listBooks', {
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })

  let bookList = await response.json()

  console.log(bookList)
  return bookList
}

//Display a list of book titles to the admin
async function addElement(){
  const bookList = await retrieveBookList();

  const newDiv = document.createElement('div');
  document.body.appendChild(newDiv);

  const ul = document.createElement('ul');
  newDiv.appendChild(ul);

  bookList.forEach(book=> {
    const li = document.createElement('li');
    const quantityInput = createQuantityInput();
    li.textContent = book.title;
    li.appendChild(quantityInput)
    ul.appendChild(li);
  });

}

addElement()

// Place a text input next to each book title.
// Give each text input a value: the quantity of the associated book.
function createQuantityInput() {
  const quantityInput = document.createElement('input');
  quantityInput.type = 'text';
  quantityInput.value = 1; 
  quantityInput.addEventListener('input', handleQuantityChange);
  return quantityInput;
}

function handleQuantityChange(event) {
  const quantity = event.target.value;
  console.log(`Quantity changed to: ${quantity}`);
}

//Place a submit button next to each text input.
//When the submit button is clicked, retrieve the quantity from the associated text input and save the updated quantity to the server.
