$("h1").on("mouseover",4function(){
  $("h1").css("color", "purple");
});


$(document).keypress(function(event){
$("h1").text(event.key);
});
