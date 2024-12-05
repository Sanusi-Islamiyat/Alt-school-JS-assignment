document.body.style.display = 'flex'
document.body.style.alignItems = 'center'
document.body.style.justifyContent = 'center'


const container = document.createElement('div');
container.style.backgroundColor = '#f2f3f4';
container.style.width = '1300px'
container.style.height = '250px'
container.style.position = 'relative'
container.style.borderRadius = '12px'
container.style.marginBlockStart = '200px'
document.body.appendChild(container);

const blueLine = document.createElement('div');
blueLine.style.backgroundColor = '#0080fe'
blueLine.style.height = '250px'
blueLine.style.width = '10px'
blueLine.style.borderRadius = '12px 0px 0px 12px'
blueLine.style.position = 'absolute'
blueLine.style.left = '0'
container.appendChild(blueLine);

const openingQuote = document.createElement('p')
openingQuote.innerHTML = '&#8220;'
openingQuote.style.fontSize = '50px'
openingQuote.style.fontWeight = 'bold'
openingQuote.style.margin = '50px 0px 0px 50px'
openingQuote.style.color = '#0080fe'
container.appendChild(openingQuote);



const paragragh = document.createElement('p');
paragragh.textContent = 'See you on the other side, where we will discuss the events in JavaScript, may the force be with you.';
paragragh.style.fontStyle = 'italic';
paragragh.style.fontFamily = 'times new roman'
paragragh.style.margin = '0px 0px 0px 40px'
paragragh.style.fontSize = '30px'
paragragh.style.fontWeight = '500'
container.appendChild(paragragh);


const closingQuote = document.createElement('p')
closingQuote.innerHTML = '&#8221;'
closingQuote.style.fontSize = '50px'
closingQuote.style.fontWeight = 'bold'
closingQuote.style.margin = '10px 0px 0px 60px'
closingQuote.style.color = '#0080fe'
container.appendChild(closingQuote);
