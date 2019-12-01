// Make a div
const div = document.createElement('div');
div.innerText = 'Hello world';

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.innerText = 'one';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'two';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'three';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'four';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'five';
ul.appendChild(li5);

div.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const HTMLstring = `
<div>
  <p>Hello</p>
  <p>World</p>
</div>
`;

// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', HTMLstring);

// add a class to the second paragraph called warning
const innerDiv = div.firstElementChild;
innerDiv.children[1].classList.add('warning');

// remove the first paragraph
innerDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>${name} is ${height} cm tall, and ${age} years old. In dog years this person would be ${age *
    7}. In dog centimeters That would be a tall dog!</p>
    <button class="delete" type="button">Delete</button>
  </div>
  `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
const people = [
  {
    name: 'Luke',
    age: 31,
    height: 179,
  },
  {
    name: 'Zoe',
    age: 10,
    height: 150,
  },
  {
    name: 'Tyler',
    age: 8,
    height: 140,
  },
  {
    name: 'Logan',
    age: 6,
    height: 130,
  },
];

// append those cards to the div
cards.innerHTML = people
  .map(person => generatePlayerCard(person.name, person.age, person.height))
  .join('');

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButtons = document.querySelectorAll('.delete');

// make our delete function
function deleteCard(event) {
  const clicked = event.currentTarget;
  clicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
deleteButtons.forEach(button => button.addEventListener('click', deleteCard));
