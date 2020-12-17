$(document).ready(function(){
  new fullpage('#fullpage', {
    responsiveWidth: 769,
    afterResponsive: function(isResponsive){
     
    },
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
    pageDots: true,
  });

  $('.bac-slider').flickity({
		// options
		cellAlign: 'center',
		contain: true,
		wrapAround: true,
		prevNextButtons: true,
    pageDots: true,
    adaptiveHeight: true
  });
  
  $('.slider').on( 'change.flickity', function( event, index ) {
    const activeIndex = $('.slider-item_wrapper').length - 1
    $(`.slider-item_wrapper`).removeClass('removes')
		if(index == activeIndex){
			$(`.slider-item_wrapper:nth-child(1)`).addClass('removes')
    }

    $('.bac-slider').flickity( 'select', index  );
  });



  $(document).on('click', '.slider-item', function(e){
    if($(window).width() > 768){
      if(!$(e.target).hasClass('slider-item_before')){
        const index = $(this).parent('.slider-item_wrapper').index();
        $('.slider').flickity( 'select', index);
        console.log(e.target)
      }
    }
  })

  $(document).on('click', '.slider-item_before', function(){
    if($(window).width() > 768){
      const index = $(this).parents('.slider-item_wrapper').index();
      const indexActive = $('.slider-item_wrapper.is-selected').index();
      const indexAll = $('.slider-item_wrapper').length - 1

      if(index > indexActive && index != indexAll){
        $('.slider').flickity( 'select', index + 1);
        console.log(index, indexActive, indexAll)
      } else if (index < indexActive && indexActive != 0 ){
        if(indexActive == indexAll && index == 0){
          $('.slider').flickity( 'select', indexAll + 2);
        } else{
          $('.slider').flickity( 'select', index - 1);
        }
        
        console.log(index, indexActive, indexAll)
      } else if(index == indexAll && indexActive != indexAll - 1){
        $('.slider').flickity( 'select', indexAll - 1);
        console.log(index, indexActive, indexAll)
      } else if(indexActive == 0){
        $('.slider').flickity( 'select', indexAll);
        console.log(index, indexActive, indexAll)
      } else if(index == indexAll && indexActive == indexAll - 1){
        $('.slider').flickity( 'select', indexAll + 1);
        console.log(index, indexActive, indexAll)
      }
    }
  })

  $(document).on('click', '.bac-slider_item-before', function(){
    $('.bac-slider').flickity( 'previous');
  })

  $(document).on('click', '.bac-slider_item-after', function(){
    $('.bac-slider').flickity( 'next');
  })


  $('.bac-slider').on( 'change.flickity', function( event, index ) {
    $('.slider').flickity( 'select', index );
  });
  
  $(document).on('click', '.slider-item .grad-btn', function(e){
    e.preventDefault();
    $('.main-slider-wrapper').addClass('is-disabled');
    $('.sub-slider-wrapper').addClass('is-active');
    $('.bac-slider').flickity('reposition');
    $('.bac-slider').flickity('resize');

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
    if($(window).width() > 768){
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
    }
  })

$('.dictionary-btn').click(function(e){
  e.preventDefault();
  $('body').addClass('disabled');
  $('.dictionary').addClass('is-active')
})

$('.dictionary-remove-btn').click(function(e){
  e.preventDefault();
  $('body').removeClass('disabled');
  $('.dictionary').removeClass('is-active')
})



})