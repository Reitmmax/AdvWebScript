// JavaScript Document
'use strict'
const domain = 'https://api.scryfall.com';

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const cardName = document.getElementById('searchInput').value;
  fetch(`${domain}/cards/named?fuzzy=${encodeURIComponent(cardName)}`)
    .then(response => response.json())
    .then(data => {
      const cardInfo = document.getElementById('textContent');
      cardInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Types: ${data.type_line}</p>
        <p>Mana Value: ${data.mana_cost}</p>
        <p>CMC: ${data.cmc}</p>
        <p>Text: ${data.oracle_text}</p>
        <p>Set: ${data.set}</p>
      `;
	  
	    document.querySelector('.text-container').style.display = 'block';
	  
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = `<img src="${data.image_uris.normal}" alt="${data.name}">`;
    })
    .catch(error => {
      console.error('Error fetching card data:', error);
    });
});
