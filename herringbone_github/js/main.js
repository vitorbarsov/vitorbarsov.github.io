$(document).ready(function () {

  $('.nav-contacts__button').on("click", function () {
    $('.overlay').show();
  });

  $('.popup__close').on("click", function () {
    $('.overlay').hide();
  });

});