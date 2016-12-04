console.log('script is connected')

$(function() {

  let $resume = $('.resume');
  let $resBtn = $('.resumeBtn');
  let $skillsBtn = $('.skillsBtn');
  let $skills = $('.skills');
  let $x = $('.x');

  // Show resume on click
  $resBtn.on('click', () => {
    $resume.css({'visibility': 'visible', 'height' : '800px', 'width' : '900px'});
    $('#aboutContent').css({'visibility': 'hidden'});
  })

  // Hide resume on click
  $x.on('click', () => {
    $resume.css({'visibility': 'hidden', 'height' : '0px', 'width': '0px'});
    $('#aboutContent').css({'visibility': 'visible'});
  })

  // Show skills on click
  $skillsBtn.on('click', () => {
    $skills.css({'visibility': 'visible', 'height' : '600px', 'width' : '600px'});
    $('#aboutContent').css({'visibility': 'hidden'});
  })

  // Hide skills on click
  $x.on('click', () => {
    $skills.css({'visibility': 'hidden', 'height' : '0px', 'width': '0px'});
    $('#aboutContent').css({'visibility': 'visible'});
  })

});




