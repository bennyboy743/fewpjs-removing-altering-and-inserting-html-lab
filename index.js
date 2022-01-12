// Write your code here!
const removingMain = document.getElementById('main');
removingMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Ben is the champion';

document.body.append(newHeader)