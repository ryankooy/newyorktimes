$(document).ready(function() {
    
    var term = $('.search').val();
    
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&sort=newest&api-key=EgdI4aEIk1V6U1fmWZvogvQgoCS2c3NX";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});