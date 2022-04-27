// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let string = 'Pawan is my name, pawan is my nameS';
let gets = /pawan/gi;
let mat = string.match(gets);
console.log(mat);
