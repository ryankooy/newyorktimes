$(document).ready(function() {
  var search = prompt("Search Term?");
  var begin = prompt("Earliest Year");
  var stop = prompt("Latest Year?")
      
  queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date=" + begin + "0101&end_date=" + stop + "0101&api-key=GYUOzPwDXAIAOZznEOeVOJuA2AA0icEI";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.response.docs);

    var art = response.response.docs;

    for (var i=0; i < art.length; i++) {
      console.log(art[i].snippet)
    }
  });