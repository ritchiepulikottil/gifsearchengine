document.querySelector(".js-go").addEventListener('click', function() {
	var userInput = getUserInput();
	searchGiphy( userInput );
	document.querySelector('footer').innerHTML = "";
});

document.querySelector('.js-userinput').addEventListener('keyup', function (e) {
	if (e.which === 13) {
 		var userInput = getUserInput();
 		searchGiphy( userInput );
		document.querySelector('footer').innerHTML = "";
    }
});

function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;
    return inputValue;
}


function searchGiphy( searchQuery ) {
	var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();
	
	GiphyAJAXCall.addEventListener('load', function( data ) {
			var actualData = data.target.response;
			pushToDOM(actualData);
			console.log(actualData);
		
	});

}










function pushToDOM( response ) {
	response = JSON.parse( response );
	var images = response.data;
	var container = document.querySelector('.js-container');
	container.innerHTML = "";
	images.forEach(function(image){
		var src = image.images.fixed_height.url;
		container.innerHTML += "<img src='"+ src +"' class='container-image' />";
	});
}