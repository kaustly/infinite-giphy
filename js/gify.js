$(document).ready(function(){

  $("button").click(function(evt){
    evt.preventDefault();
    var api = "http://api.giphy.com/v1/gifs/search?";
    var apiKey = "&api_key=dc6zaTOxFJmzC";
    var search = $("#keyword").val();
    var q = "&q=" + search;
    var url = api + apiKey + q;
    var i = 0;
    var count = 0;
    var allthegifs;

    $.ajax({
      url : url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log("great success");
      allthegifs = response.data.length;
    }).fail(function(){
      console.log("you never get dis");
    }).always(function(){
      console.log("this always happens");
    });

    getGifs();

    function getGifs(){
      $.get(url, function(response) {
        for(i; i < allthegifs; i++)  {
          console.log(i);
          if(count < 10) {
            count++;
            $("body").append("<div class = 'gifs'><img src='" + response.data[i].images.original.url + "'></div>");
          }
          else{
            count = 0;
            break;
          }
        }


      }, "json");
    }

    $(window).scroll(function(){
      if($(window).scrollTop() + $(window).height() > $(document).height() - 70){
        if(i === allthegifs){
          i = 0;
          getGifs();
        }
        getGifs();
      }
    });

  });
});
