$(document).ready(function() {

  var introSound = new Howl({
    src: ['/sounds/bug-fireants.wav', 'bug-fireants.mp3', 'bug-fireants.webm'],
    autoplay: true,
    loop: false,
    volume: 1,
  });
  setTimeout(sayHi, 1000);

  function sayHi() {
    $('#hello').fadeIn(4000);
    setTimeout(fadeIt, 6000);
  }

  function fadeIt() {
    $('#hello').fadeTo(3000, 0);
    // , function() {
    //   $('#hello').css("visibility", "hidden");
    // });
    $('#howTo').fadeIn(2000);
  };

  function mainPage() {
    document.location.href = '/home';
  }

  var firstL = false;

  $( document ).keydown(function( event ) {
    console.log('on key click firstL is: ', firstL);

    var h = new Howl({
      src: ['/sounds/drops-beatbox.wav', 'drops-beatbox.mp3', 'drops-beatbox.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    });
    var e = new Howl({
      src: ['/sounds/noise-laughter.wav', 'noise-laughter.mp3', 'noise-laughter.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    });
    var l = new Howl({
      src: ['/sounds/noise-cat.wav', 'noise-cat.mp3', 'noise-cat.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    });
    var ll = new Howl({
      src: ['/sounds/electronics-pipes.wav', 'electronics-pipes.mp3', 'electronics-pipes.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    });
    var o = new Howl({
      src: ['/sounds/drops-explosion.flac', 'drops-explosion.mp3', 'drops-explosion.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    });

    if ( event.which == 72 ) {
      $('#howTo').fadeOut();
      // $('div#hello > #h').fadeTo(3000, 1);
      $('#hello').fadeTo(3000, 1);
      h.play();
    };
    if ( event.which == 69 ) {
      $('#e').fadeIn();
      e.play();
    };

    if (event.which == 76) {
      if (firstL == false) {
        $('#l').fadeIn();
        firstL = true;
        l.play();
      } else {
        $('#l').fadeIn();
        ll.play();
      }
    };
    if ( event.which == 79 ) {
      $('#o').fadeIn();
      o.play();
      $('#goPlay').show();
      setTimeout(mainPage, 4000);
    };

  });

});
