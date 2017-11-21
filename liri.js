var keys = require("./keys.js");
var twitter = require("twitter");
var twitterKeys = new twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret,
})
var params = {screen_name: 'nodejs'};
var userInput = process.argv;

if (userInput[2] === "my-tweets") {
	mytweets();
} else if (userInput[2] === "spotify-this-song"){
	spotifytThisSong();
} else if (userInput[2] === "movie-this") {
	movieThis();
} else if (userInput[2] === "do-what-it-says") {
	doWhatItSays();
}


function mytweets(){

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
 		 if (!error) {
    		console.log(tweets);
  		}
	});
};

function spotifytThisSong(){

};

function movieThis(){

};

function doWhatItSays(){

};

