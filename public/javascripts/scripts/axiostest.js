const article = document.querySelector('#campgrounds');

dataString = JSON.stringify('['+article.dataset.list+']');

const data= JSON.parse(dataString);
console.log(data);


console.log( data[Math.floor(Math.random() * data.length)].image);