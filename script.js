const url = 'https://api.nasa.gov/planetary/apod?api_key=TKhl4hov1s6R4AC30uCJ7jISaIYwlBZLP78H4q6H'

let img = document.getElementById('img');
let title = document.getElementById('title');
let explaination = document.getElementById('explaination');


console.log('hi')

async function fetchDataJSON() {
  const response = await fetch(url);
  const fullData = await response.json();
  return fullData;
};

fetchDataJSON().then(fullData => {
      fullData;
      img.src=fullData.url;
      title.innerText=fullData.title;
      explaination.innerText=fullData.explanation;
      console.log(fullData);
});