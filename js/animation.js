// Animations initialization
new WOW().init();

$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});

$(function () {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });
});
