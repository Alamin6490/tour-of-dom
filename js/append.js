// 1. where to add
const placesList = document.getElementById('places-list');
//2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli boon';

// 3. add the child
placesList.appendChild(li);

// 1. wheree to ad 
const mainContainer = document.getElementById('main-container');
// 2. what to be added 
const section = document .createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'MY foods  List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);
 
const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);
section.appendChild(ul);

mainContainer.appendChild(section);

 // set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
</h1> 
 <h1>my dress</h1>
 <ul>
    <li>T-shit</li>
    <li>lunggi</li>
    <li>panti</li>
 </ul>


`
 

 
mainContainer.appendChild(sectionDress);