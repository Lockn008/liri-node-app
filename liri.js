require("dotenv").config();

var keys = require("./keys.js");
var ajax = require("node.ajax");
var request = require('request');
var Twitter = require('twitter');


// May need to use the following key lines elsewhere in the code:
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


var command = process.argv[2];
var query = process.argv[3];



if (command === "my-tweets") {
	var client = new Twitter({
		consumer_key: keys.twitter.consumer_key,
		consumer_secret: keys.twitter.consumer_secret,
		access_token_key: keys.twitter.access_token_key,
		access_token_secret: keys.twitter.access_token_secret
	});


	var params = {screen_name: 'NorthNowhere'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			console.log(tweets.text);
		}
	});

} else if (command === "spotify-this-song") {
	var query = process.argv[3];
	if (query) {
		console.log(query);
	} else {
		console.log("The Sign"); //query The Sign by Ace of Base if no entry entered.  NOT FINISHED***************
	}

} else if (command === "movie-this") {

	if (!query) {
		console.log("no entry entered"); //query Mr. Nobody if empty.  NOT FINISHED*****************************
	};

	// var queryURL = "https://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy";

	// request(queryURL, function (error, response, body) {
	// 	console.log('error:', error); // Print the error if one occurred
	// 	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	// 	console.log('body:', body); // Print the HTML for the Google homepage.
	// 	console.log(response);
	// });

	// var res = ajax(queryURL,"GET",{
 //    params: value
	// },function(res){
	// 	console.log(response.Title);
	// 	console.log(response.Year);
	// 	console.log(response.Ratings[0].Value);
	// 	console.log(response.Ratings[1].Value);
	// 	console.log(response.Country);
	// 	console.log(response.Language);
	// 	console.log(response.Plot);
	// 	console.log(response.Actors);
	// });

	// $.ajax({
	// 	url: queryURL,
	// 	method: "GET"
	// }).done(function(response) {
	// 	console.log(response.Title);
	// 	console.log(response.Year);
	// 	console.log(response.Ratings[0].Value);
	// 	console.log(response.Ratings[1].Value);
	// 	console.log(response.Country);
	// 	console.log(response.Language);
	// 	console.log(response.Plot);
	// 	console.log(response.Actors);
	// });

} else if (command === "do-what-it-says") {

} else {
	console.log("Not a valid command.  Please enter a valid command.");
}