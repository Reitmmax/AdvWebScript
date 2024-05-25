"use strict";
//Globals
const domain = 'https://www.amiiboapi.com/api/amiibo/'
var figval = ''
//Topic 01 is clicked
$('#t01').click(() => {
   figval = $('#t01').val();
    
    fetch(`${domain}${figval}`)
    .then(response => {return response.json();}) //This small function sets the response to json
    .then(path => {
        let amiimg = path.amiibo[0].image; //gets the value of image
        let aminame = path.amiibo[0].name; //gets the value of name
        let amichar = path.amiibo[0].character; //gets the value of character
        let amigame = path.amiibo[0].gameSeries; //get the value of gameSeries
		let amirelease = path.amiibo[0].release.na; //gets the value of release
        
        $('#info').html(
            `<img src="${amiimg}" alt="${aminame}">
                <h2>Amiibo: ${aminame}</h2>
                <p>${amichar} is from the: ${amigame} games.</p> 
				<p> Released in ${amirelease}</p> 
`
                
        );
    });
});

//The other two buttons follow a similar pattern.
//Topic 02 is clicked
$('#t02').click(() => {
   figval = $('#t02').val();
    
    fetch(`${domain}${figval}`)
    .then(response => {return response.json();}) //This small function sets the response to json
    .then(path => {
        let amiimg = path.amiibo[0].image; //gets the value of image
        let aminame = path.amiibo[0].name; //gets the value of name
        let amichar = path.amiibo[0].character; //gets the value of character
        let amigame = path.amiibo[0].gameSeries; //get the value of gameSeries
		let amirelease = path.amiibo[0].release.na; //gets the value of release
        
        $('#info').html(
            `<img src="${amiimg}" alt="${aminame}">
                <h2>Amiibo: ${aminame}</h2>
                <p>${amichar} is from the: ${amigame} games.</p>
				<p> Released in ${amirelease}</p>`
                
        );
    });
});
//Topic 03 is clicked
$('#t03').click(() => {
   figval = $('#t03').val();
    
    fetch(`${domain}${figval}`)
    .then(response => {return response.json();}) //This small function sets the response to json
    .then(path => {
        let amiimg = path.amiibo[0].image; //gets the value of image
        let aminame = path.amiibo[0].name; //gets the value of name
        let amichar = path.amiibo[0].character; //gets the value of character
        let amigame = path.amiibo[0].gameSeries; //get the value of gameSeries
		let amirelease = path.amiibo[0].release.na; //gets the value of release
        
        $('#info').html(
            `<img src="${amiimg}" alt="${aminame}">
                <h2>Amiibo: ${aminame}</h2>
                <p>${amichar} is from the: ${amigame} games.</p> 
				<p> Released in ${amirelease}</p>`
                
        );
    });
});