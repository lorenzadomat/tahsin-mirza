$(function() {

  if (window.matchMedia("(max-width: 800px)").matches)
  {
    $(".wow").each(function() {
      var height = $(this).attr('data-wow-offset');
      if (height) {
        $(this).attr('data-wow-offset', height / 4);
      }
    })
  }


  // Page animation initialize
  new WOW({
    mobile: true
  }).init();
});

$(document).ready(function() {
  $('#sideel').click(function() {
    $(this).parents('.config').toggleClass('active');
  });

  $('body').data('bodyClassList', '');

  $('.color-item').click(function() {
    var cls = $(this).data('class');

    $('body').attr('class', $('body').data('bodyClassList'));
    $('body').addClass(cls);
  });

  $('#change-page').on('change', function() {
    var url = $(this).val() + '.html';

    if($(this).val()) {
      window.location.assign(url);
    }
  });

  $('[data-animate="scrolling"]').each(function() {
    var self = $(this);
    var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');

    self.click(function(e) {
      $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    });
  });
});


/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function() {
  var counterInit = function() {
    if ( $('.section-counter').length > 0 ) {
      $('.section-counter').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function(){
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });

        }

      } , { offset: '95%' } );
    }

  }
  counterInit();
});
