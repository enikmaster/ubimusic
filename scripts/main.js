$(document).ready(function () {
    var data;
    $.ajax({
        url: "https://songs-api-ubiwhere.now.sh/api/songs",
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        
        success: function(resultData) {
            //console.log(resultData[0].title);
        },
    })
});