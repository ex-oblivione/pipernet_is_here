$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-nav-bar').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header-list,.header-logo').click(function (event) {
      $('.header-burger,.header-nav-bar').removeClass('active');
      $('body').removeClass('lock');
    })
  });
});