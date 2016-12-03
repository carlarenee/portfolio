console.log('script is connected')

$(function() {

let activateWelcome = () => {
  $('#welcome').animate({height: '100vh',width: '100vw'}, 500);

  $('#about').animate({height: '0vh', width: '0vh'}, 500);
  $('#projects').animate({height: '0vh', width: '0vh'}, 500);
  $('#contact').animate({height: '0vh', width: '0vh'}, 500);
  $('#welcomeContent').animate({opacity: '1'}, 1000);
  $('.title').css({'visibility': 'hidden'});
}

let activateAbout = () => {
  $('#about').animate({height: '100vh',width: '100vw'}, 500);
  
  $('#welcome').animate({height: '0vh', width: '0vh'}, 500);
  $('#projects').animate({height: '0vh', width: '0vh'}, 500);
  $('#contact').animate({height: '0vh', width: '0vh'}, 500);
  $('#aboutContent').animate({opacity: '1'}, 1000);
  $('.title').css({'visibility': 'hidden'});
}

let activateProjects = (e) => {
  $(e.target).animate({height: '100vh',width: '100vw'}, 500);
  
  $('#welcome').animate({height: '0vh', width: '0vh'}, 500);
  $('#about').animate({height: '0vh', width: '0vh'}, 500);
  $('#contact').animate({height: '0vh', width: '0vh'}, 500);
  $('#projectsContent').animate({opacity: '1'}, 1000);
  $('.title').css({'visibility': 'hidden'});
}

let activateContact = (e) => {
  $(e.target).animate({height: '100vh',width: '100vw'}, 500);
  
  $('#welcome').animate({height: '0vh', width: '0vh'}, 500);
  $('#about').animate({height: '0vh', width: '0vh'}, 500);
  $('#projects').animate({height: '0vh', width: '0vh'}, 500);
  $('#contactContent').animate({opacity: '1'}, 1000);
  $('.title').css({'visibility': 'hidden'});
}

let back = () => {

  $('.rectangleContent').animate({opacity: '0'}, 500);
  $('.title').css({'visibility': 'visible'});
}

// Event Listneners
$('#welcome').on('click', activateWelcome)
$('#about').on('click', activateAbout)
$('#projects').on('click', activateProjects)
$('#contact').on('click', activateContact)
$('.backButton').on('click', back)

});





// let openPage = (e) => {
//    // $(e.target).animate({height: '100vh',width: '100vw'}, 500);
//   // console.log(e.target);
//   // let otherBoxes = $('.rectangle') !== e.target
//   // console.log(otherBoxes);

//   //let selected = e.target;
//   let rectangle = $('.rectangle');
//   //console.log(rectangle);

//   rectangle.each ((e) => {
//     let section = $(this);
//     section.on('click', () => {
//     section.css({'backgroundColor' : "black"})
    

//     })
//   })
// }
  
//   // if (rectangle == selected) {
//   //   selected.addClass('fullView');
//   // };

//   //     {height: '100vh',width: '100vw'}, 500);
//   // } else {
//   //   $('.rectangle').css({"height" : '0vh', "width" : '0vh'});
//   // };

  
// //   $('#aboutContent').animate({opacity: '1'}, 1000);
// //   $('.title').css({'visibility': 'hidden'});
// // }