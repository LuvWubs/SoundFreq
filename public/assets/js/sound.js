// const soundDB = require('./sounds')
$(document).ready(function() {

  $( document ).keydown(function( event ) {

    var thump = new Howl({
      src: ['/sounds/noise-thump.wav', 'noise-thump.mp3', 'noise-thump.webm'],
      autoplay: false,
      loop: false,
      volume: 0.5,
      onend: function() {
        console.log('Finished!');
      }
    });

    if ( event.which == 65 ) {
       event.preventDefault();
       console.log('the A key is working');
       thump.play();
    };

  });
});


// Play returns a unique Sound ID that can be passed
// into any method on Howl to control that specific sound.
// var id1 = sound.play();
// var id2 = sound.play();

// Fade out the first sound and speed up the second.
// sound.fade(1, 0, 1000, id1);
// sound.rate(1.5, id2);
//
//   $( document ).on( "keydown", function( event ) {
//     var keyChoice = event.which;
//     console.log(keyChoice);
//     $.ajax({
//       method: "GET",
//       //url: "/audio" + keyChoice
//       url: "/audiovisual/" + keyChoice
//     }).then(function(data) {
//       // data = { audio: 'thump.wav', visual: 'cat.jpeg' }
//       // NOTE play sound file
//       var audio = data.audio;
//       var visual = data.visual;
//       // play audiovisual
//
//       // play visual
//
//     })
//       // switch (event.which) {
//       //   case 65: sound();
//       //       // break;
//       // }
//   });
  // });
//
// // const song = require('../..app/models/soundFiles.js')
//
//   };
//   $('#play').keypress(function() {
//     console.log('a button was pressed');
//   };
//
//
//   var sound = new Howl({
//     urls: ['sound.mp3', 'sound.ogg']
//   }).play();
//
//   $(document).keydown(function(e) {
// //need to load file path from db in each switch statement
//     switch (e.which) {
//       case 65:
//           break;
//       case 66:
//           break;
//       case 67:
//           break;
//       case 68:
//           break;
//       case 69:
//           break;
//       case 70:
//           break;
//       case 71:
//           break;
//       case 72:
//           break;
//       case 73:
//           break;
//       case 74:
//           break;
//       case 75:
//           break;
//       case 76:
//           break;
//       case 77:
//           break;
//       case 78:
//           break;
//       case 79:
//           break;
//       case 80:
//           break;
//       case 81:
//           break;
//       case 82:
//           break;
//       case 83:
//           break;
//       case 84:
//           break;
//       case 85:
//           break;
//       case 86:
//           break;
//       case 87:
//           break;
//       case 88:
//           break;
//       case 89:
//           break;
//       case 90:
//           break;
//     }
//   });
//
// //NOTE test feature with #play button
//   var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', './sounds/bug-purring.wav');
//
//     audioElement.addEventListener('ended', function() {
//         this.play();
//     }, false);
//
//     // audioElement.addEventListener("canplay",function(){
//     //     $("#length").text("Duration:" + audioElement.duration + " seconds");
//     //     $("#source").text("Source:" + audioElement.src);
//     //     $("#status").text("Status: Ready to play").css("color","green");
//     // });
//     //
//     // audioElement.addEventListener("timeupdate",function(){
//     //     $("#currentTime").text("Current second:" + audioElement.currentTime);
//     // });
//     //
//     $('#play').click(function() {
//         // audioElement.play();
//         console.log('play button clicked');
//         // $("#status").text("Status: Playing");
//     });
//
//     // $('#pause').click(function() {
//     //     audioElement.pause();
//     //     $("#status").text("Status: Paused");
//     // });
//     //
//     // $('#restart').click(function() {
//     //     audioElement.currentTime = 0;
//     // });
// });

// module.exports = event.which;
