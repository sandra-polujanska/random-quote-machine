// scripts.js

var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, //here's a weird construction, but on the left we have the name of the parameter, and to the right is the name of the variable that holds the value
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}

document.addEventListener("DOMContentLoaded", getJoke());







