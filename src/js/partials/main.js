$(document).ready(function(){
  new fullpage('#fullpage', {
    onLeave: function(index, nextIndex, direction) {
      console.log()
      if($('#section-2').hasClass('active')){
        $('.description-btn').addClass('is-disabled');
      }
    }
   
  });

  $(document).on('click', '.moveSectionDown', function(){
    fullpage_api.moveSectionDown();
    $(this).addClass('is-disabled');
  });

 


  $('.slider').flickity({
		// options
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		prevNextButtons: true,
    pageDots: false,
  });

  $('.bac-slider').flickity({
		// options
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		prevNextButtons: true,
		pageDots: false
  });
  
  $('.slider').on( 'change.flickity', function( event, index ) {
    const activeIndex = $('.slider-item_wrapper').length - 1
    $(`.slider-item_wrapper`).removeClass('removes')
		if(index == activeIndex){
			$(`.slider-item_wrapper:nth-child(1)`).addClass('removes')
    }

    $('.bac-slider').flickity( 'select', index  );
  });

  $('.bac-slider').on( 'change.flickity', function( event, index ) {

    $('.slider').flickity( 'select', index  );
  });
  
  $(document).on('click', '.slider-item .grad-btn', function(e){
    e.preventDefault();
    $('.main-slider-wrapper').addClass('is-disabled');
    $('.sub-slider-wrapper').addClass('is-active');
  });

  $(document).on('click', '.bac-slider-burger', function(e){
    e.preventDefault();
    $('.main-slider-wrapper').removeClass('is-disabled');
    $('.sub-slider-wrapper').removeClass('is-active');
  });

  $(document).on('click', '.bac-slider_mif-icon', function(e){
    e.preventDefault();
    $('.bac-slider_mif-false').toggleClass('is-disabled');
    $('.bac-slider_mif-true').toggleClass('is-active');
  })
  
  $(window).resize(function(){
    $('.slider').flickity('destroy');
    $('.bac-slider').flickity('destroy');
    $('.slider').flickity({
      // options
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false,
    });
  
    $('.bac-slider').flickity({
      // options
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      prevNextButtons: true,
      pageDots: false
    });

    
  })
})