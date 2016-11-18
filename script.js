$(function() {

// nav box shrink and grow functions
let counter = 1;
let changeBoxes = function() {
  if (counter === 1) {
    $('.boxes').animate({
      height : '50px',
      width : '50px',
      borderRadius : '10px'
    }, 2000);
    $('h2').animate({
      fontSize : '0.5em'
      }, 2000);
    counter = 2;
  } else {
    $('.boxes').animate({
      height : '100px',
      width : '100px',
      borderRadius : '20px'
    }, 2000);
    $('h2').animate({
      fontSize : '0.9em'
      }, 2000);
    counter = 1;
  }
};

// nav label animation
// let appear = function() {
//   $('.labels').css("visibility", "visible");
// };

// event listeners
$('.boxes').on('click', changeBoxes);
$('#box1').click(appear);

});



// $('.hover').mouseover(function() {
//   $('.text').css("visibility","visible");
// });

// $('.hover').mouseout(function() {
//   $('.text').css("visibility","hidden");
// });
