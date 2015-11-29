$(document).ready(function(){
  $("h1").click(function(){
    var api = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url : url,
      type: "get",
      dataType: "json"
    })
  })
});
