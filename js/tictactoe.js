$(document).ready(function(){

  var nought = "nought";
  var cross = "cross";

  var spot = [];

  $('.board li').each(function(i){
    spot.push($(this).attr('id'));
  });

  //console.log(spot);

  $('.board li').on('click',function(event){
      for (var i = 0; i < spot.length; i++) {
        console.log(spot[i]);
      }
  });
});
