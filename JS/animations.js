$(document).ready(function() {
  //slide nav menu down for mobile query
  $('#hamburger').click(function() {
    $('.nav-mobile').slideToggle('fast');
  });
  $('a').click(function() {
      $("a.visited").removeClass("visited");
      $(this).addClass('visited');
});

}); //end document ready function


//emojis
// emojify.replace(':sparkling_heart:');
