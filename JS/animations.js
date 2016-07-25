$(document).ready(function() {
  //slide nav menu down for mobile query
  $('#hamburger').click(function() {
    $('.nav-mobile').slideToggle('fast');
  });

  //why no work?
  // $('.why-us').mouseover(function() {
  //   $('#sparkling_heart').effect('bounce', { times: 3 }, 'slow');
  // });

  $(function(){
      $(".typing").typed({
      strings: [" quota crusher", " beautiful sales human", " rockstar"],
      typeSpeed: 10,
      backDelay: 1000,
      cursorChar: "|",
      loop: true
      });
    });

}); //end document ready function


//emojis
// emojify.replace(':sparkling_heart:');
