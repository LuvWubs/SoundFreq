$(document).ready(function(){

    $('#nav-expander').on('click',function(e){
  		e.preventDefault();
  		$('body').toggleClass('nav-expanded');
  	});

  	$('#nav-close').on('click',function(e){
  		e.preventDefault();
  		$('body').removeClass('nav-expanded');
  	});

    $('.sound-nav').on('click', function(e) {
      e.preventDefault();
      var category = $(event.target)[0].id;
      console.log('chosen category: ', category);
      $.get('/api/posts/category/' + category, function(data) {
        console.log('getting ' + category + ' sounds from db...');
        loadBtns();
      })
    })

});

function loadBtns() {
  console.log('loadBtns func fired');
  // take db sounds and link to alpha btns
}
