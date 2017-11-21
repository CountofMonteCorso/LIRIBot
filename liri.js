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
	var omdb = require("omdb");
	var movieQuery = userInput[3];
	var queryURL = "https://www.omdbapi.com/?t=" + movieQuery + keys.omdbKeys.key 

	  $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(omdb);
});

};

function doWhatItSays(){

};

		//Psuedocoding the rest (as instructed):

						//OMDB:
// so I would need to complete the movieThis function by
// figuring out whatever the path to the movie title,
// release year, ratings, etc to put in the console log. I
// couldn't get the API to work using both the "trilogy"
// key as the instructions said, nor with Clark's API key
// from solved exercises that used said key.  Since I can't
// get it to work, I can't get the path to complete the
// function.

					//doWhatItSays
// I honestly have no idea. When I read the instructions,
// I don't even know what it's asking.

						//bonus:
// Surprisingly, I think I actually know how to do this
// one.  I don't think I've ever known how to do a bonus
// before.  Anyway, I think it would look something like
// this:

// var fs = require("fs"); <obvi i'd npm install fs --save this first so it works>
// var textFile = ~the name of the text file I add their data to~
 
// fs.appendFile(textFile, ~Their data for the results of a specific function~, function(err) {
//   	if (err) {
//    		return console.log(err);
//   	}
//		else {
//   		console.log("Content Added!");
// 		}


// Except I'd have to do it for each function.  There's probably some kind of loop to shorten that,
// but let's be real here; we all know the odds of me figuring that out on my own are probably
// the same as the Niners winning the Super Bowl this year... but slightly worse.