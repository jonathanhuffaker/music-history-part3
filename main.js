$(document).ready(function() {

	
		$(document).on("click", "#get-more-songs", function() {
		$.ajax({
		url:"./more-songs.json"
	}).done(function(songList){
		songs(songList)
	console.log(songList.songs);
			});
		});

	});
		


function songs(list) {
	for (var i = 0; i< list.songs.length;i++) {
			var currentSong = list.songs[i];
			$("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
			$("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
			$("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
			$("#list-of-songs").append("<button> Delete this song</button>");
		};
		$()
};

//everything above is working but need to work on the delete button so it removes songs individually upon click

		$(document).on("click", "#get-more-songs2", function() {
		$.ajax({
		url:"./more-songs2.json"
	}).done(function(songList){
		songs2(songList)
	console.log(songList.songs2);
			});
		});


function songs2(list) {
	for (var i = 0; i< list.songs2.length;i++) {
			var currentSong = list.songs2[i];
			$("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
			$("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
			$("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
			$("#list-of-songs").append("<button> Delete this song</button>");
		};
		$()
};
	


// from the projector screen at class


	// finding parent DOM elements
	console.log($(".album").parents(".song-container").attr("index"));

	// listening to events on dynamically created DOM Elements
	$(document).on("click", ".delete", function() {
		$(".song-container").remove();
		// alert("You clicked on a delete button");

});
// });
