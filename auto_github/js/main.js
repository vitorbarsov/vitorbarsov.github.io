$(document).ready(function(){

  $('.button').on("click", function(){
   $('.overlay').show();
  });

  $('.popup-close').on("click", function(){
   $('.overlay').hide();
  });

});
