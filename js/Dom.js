// console.log();
const sections = document.querySelectorAll('section');
for (const section of sections) {
   section.style.border = '2px solid steelblue';
   section.style.marginBottom = '5px';
   section.style.borderRadius = '15px';
   section.style.paddingLeft = '50px';
   section.style.backgroundColor = 'lightgray';
    
}

// 1. where to add
const placesList = document.getElementById('plascs-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// 3. add the child
placesList.appendChild(li);