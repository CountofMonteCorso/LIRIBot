var keys = require("./keys.js");
var twitter = require("twitter");
var twitterClient = new twitter({
	consumer_key: keys.twitterKeys.consumer_key,
	consumer_secret: keys.twitterKeys.consumer_secret,
	access_token_key: keys.twitterKeys.access_token_key,
	access_token_secret: keys.twitterKeys.access_token_secret,
})
var params = {screen_name: "corenforcer"};
var userInput = process.argv;

if (userInput[2] === "my-tweets") {
	mytweets();
} else if (userInput[2] === "spotify-this-song"){
	spotifyThisSong();
} else if (userInput[2] === "movie-this") {
	movieThis();
} else if (userInput[2] === "do-what-it-says") {
	doWhatItSays();
}


function mytweets(){
		twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
 			 if (!error) {
    				for (i = 0; i < 20 && i < tweets.length; i++){
    					console.log(tweets[i].created_at);
    					console.log(tweets[i].text);
  					}
  			}
		}); 	

};

function spotifyThisSong(){
	var Spotify = require('node-spotify-api');
	var params = {
		type: 'track',
		query: 'Shooting Stars'
	}; 
		if (userInput.length === 4) {
			params.query = userInput[3];
		}
 
	var spotifyClient = new Spotify({
  		id: keys.spotifyKeys.clientID,
  		secret: keys.spotifyKeys.clientSecret,
	});
	spotifyClient.search(params, function(err, data) {

  			if (err) {
    			return console.log('Error occurred: ' + err);
  			}
  			var track1 = data.tracks.items[0];
  				console.log("Song title: " + track1.name); 
				console.log("On the album " + track1.album.name);
			//for loop for songs w/ multiple artists
			for (var i = 0; i < track1.artists.length; i++) {
				console.log("by " + track1.artists[i].name); 
			}
			//or needed for songs w/o previews
				console.log("Preview song: " + (track1.preview_url || "No Preview Available...beyotch"))

	});
};

function movieThis(){

};

function doWhatItSays(){

};

