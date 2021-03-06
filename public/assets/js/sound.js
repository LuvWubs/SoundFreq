$(document).ready(function() {

    $('.sound-nav').on('click', function(e) {
      e.preventDefault();
      var category = $(event.target)[0].id;
      console.log('chosen category: ', category);
      $.get('/api/sounds/' + category, function(data) {
        console.log('getting ' + category + ' sounds from api-routes...');

        randoNoise(data);
      })
    })

    function randoNoise(sounds) {
      $(document).keydown(function() {
        for (i = 0; i < sounds.length; i++) {
          var rando = sounds[i].file;
        };
        var rando = sounds[Math.floor(Math.random()*sounds.length)];
        console.log('rando: ', rando);
        var randoFile = rando.file;
        console.log('on keydown ' + randoFile + ' was requested');
        playIt(randoFile);
      });
    };

    function playIt(filepath) {
      console.log('this is the filepath in playIt(): ', filepath);
      var sound = new Howl({
        src: [filepath]
        //   autoplay: false,
        //   loop: false,
        //   volume: 0.5,
      })
      sound.play();
    }

  });

  // NOTE api call to populate db with Sounds
  $.post('/api/sounds', {sounds: [
    {
      name: 'buzz',
      file: '/sounds/bug-buzz.wav',
      description: 'bug'
    },
    {
      name: 'call',
      file: '/sounds/bug-call.wav',
      description: 'bug'
    },
    {
      name: 'clicks',
      file: '/sounds/bug-clicks.wav',
      description: 'bug'
    },
    {
      name: 'fireants',
      file: '/sounds/bug-fireants.wav',
      description: 'bug'
    },
    {
      name: 'purring',
      file: '/sounds/bug-purring.wav',
      description: 'bug'
    },
    {
      name: 'wings',
      file: '/sounds/bug-wings.wav',
      description: 'bug'
    },
    {
      name: 'beatbox',
      file: '/sounds/drops-beatbox.wav',
      description: 'drops'
    },
    {
      name: 'explosion',
      file: '/sounds/drops-explosion.flac',
      description: 'drops'
    },
    {
      name: 'warble',
      file: '/sounds/drops-warble.ogg',
      description: 'drops'
    },
    {
      name: 'bubbles',
      file: '/sounds/electronics-bubbles.wav',
      description: 'electronics'
    },
    {
      name: 'chatting',
      file: '/sounds/electronics-chatting.wav',
      description: 'electronics'
    },
    {
      name: 'chords',
      file: '/sounds/electronics-chords.wav',
      description: 'electronics'
    },
    {
      name: 'circus',
      file: '/sounds/electronics-circus.wav',
      description: 'electronics'
    },
    {
      name: 'erie',
      file: '/sounds/electronics-erie.wav',
      description: 'electronics'
    },
    {
      name: 'gutteral',
      file: '/sounds/electronics-gutteral.wav',
      description: 'electronics'
    },
    {
      name: 'highhat',
      file: '/sounds/electronics-highhat.wav',
      description: 'electronics'
    },
    {
      name: 'laserhits',
      file: '/sounds/electronics-laserhits.wav',
      description: 'electronics'
    },
    {
      name: 'pipes',
      file: '/sounds/electronics-pipes.wav',
      description: 'electronics'
    },
    {
      name: 'signal',
      file: '/sounds/electronics-signal.wav',
      description: 'electronics'
    },
    {
      name: 'warble',
      file: '/sounds/electronics-warble.wav',
      description: 'electronics'
    },
    {
      name: 'frogs',
      file: '/sounds/nature-frogs.wav',
      description: 'nature'
    },
    {
      name: 'beads',
      file: '/sounds/noise-beads.wav',
      description: 'noise'
    },
    {
      name: 'boioing',
      file: '/sounds/noise-boioing.wav',
      description: 'noise'
    },
    {
      name: 'cat',
      file: '/sounds/noise-cat.wav',
      description: 'noise'
    },
    {
      name: 'electricwhoosh',
      file: '/sounds/noise-electricwhoosh.wav',
      description: 'noise'
    },
    {
      name: 'laughter',
      file: '/sounds/noise-laughter.wav',
      description: 'noise'
    },
    {
      name: 'metaltwang',
      file: '/sounds/noise-metaltwang.wav',
      description: 'noise'
    },
    {
      name: 'meteor',
      file: '/sounds/noise-meteor.wav',
      description: 'noise'
    },
    {
      name: 'minions',
      file: '/sounds/noise-minions.wav',
      description: 'noise'
    },
    {
      name: 'nailpull',
      file: '/sounds/noise-nailpull.wav',
      description: 'noise'
    },
    {
      name: 'noisemaker',
      file: '/sounds/noise-noisemaker.wav',
      description: 'noise'
    },
    {
      name: 'pied',
      file: '/sounds/noise-pied.wav',
      description: 'noise'
    },
    {
      name: 'raspberry',
      file: '/sounds/noise-raspberry.wav',
      description: 'noise'
    },
    {
      name: 'recordscratch',
      file: '/sounds/noise-recordscratch.wav',
      description: 'noise'
    },
    {
      name: 'squeek',
      file: '/sounds/noise-squeek.wav',
      description: 'noise'
    },
    {
      name: 'stungun',
      file: '/sounds/noise-stungun.wav',
      description: 'noise'
    },
    {
      name: 'thump',
      file: '/sounds/noise-thump.wav',
      description: 'noise'
    },
    {
      name: 'whizz',
      file: '/sounds/noise-whizz.wav',
      description: 'noise'
    }
  ]});
