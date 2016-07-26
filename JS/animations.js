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


// $(function() {
//   $('.add-button').on('click', function() {
//     vex.open({
//       content: '<div>Successfully added company</div>',
//       afterOpen: function($vexContent) {
//         return $vexContent.append($el);
//       },
//       afterClose: function() {
//         return console.log('vexClose');
//       }
//     });
//   });
// });

}); //end document ready function
