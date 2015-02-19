$(document).ready(function(){
	
	$(function() {
  $("nav a").click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top-77 }, 1000);
        return false;
      }
  });
}); 

//modal
  $(function() {
    $('.open-modal').on('click', function(e) {
      e.preventDefault();
      var image = $(this).attr('href');
      $('html').addClass('no-scroll');
      $('body').append('<div class="modal"><img src="' + image + '">');
    });
    
      $('body').on('click', '.modal', function() {
      $('html').removeClass('no-scroll');
      $('.modal').remove();
    });
  });
  
//position indicator
    var $home = $("#home");
    var homepos = $home.offset().top;

    var $art = $("#art");
    var artpos = $art.offset().top;
    
    var $dance = $("#dance");
    var dancepos = $dance.offset().top;
    
    var $work = $("#work");
    var workpos = $work.offset().top;
    
    var $about = $("#about");
    var aboutpos = $about.offset().top;

    var $homenav = $("#l1");
    var $artnav = $("#l2");
    var $dancenav = $("#l3");
    var $worknav = $("#l4");
    var $aboutnav = $("#l5");

    var $activeClass = $homenav;

 $(window).scroll(function(){   
    var scrollPos = $(document).scrollTop() + 80;
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    if(($(document).scrollTop()+winHeight) == docHeight) {
      $activeClass.removeClass("active-nav");
      $activeClass = $aboutnav;
      $activeClass.addClass("active-nav");
    }
    else if(scrollPos < artpos){
      $activeClass.removeClass("active-nav");
      $activeClass = $homenav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > artpos) && (scrollPos < dancepos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $artnav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > dancepos) && (scrollPos < workpos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $dancenav;
      $activeClass.addClass("active-nav");
    }
    else if((scrollPos > workpos) && (scrollPos < aboutpos)){
      $activeClass.removeClass("active-nav");
      $activeClass = $worknav;
      $activeClass.addClass("active-nav");
    }
    else if(scrollPos > aboutpos){
      $activeClass.removeClass("active-nav");
      $activeClass = $aboutnav;
      $activeClass.addClass("active-nav");
    }
    else {
      $activeClass.addClass("active-nav")
    }
});

});



//resizing navbar
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("header").removeClass("large").addClass("small");
    } else{
        $("header").removeClass("small").addClass("large");
    }
});

$(function() {
    function changeSlide( newSlide ) {
        // cancel any timeout
        clearTimeout( slideTimeout );
        
        // change the currSlide value
        currSlide = newSlide;
        
        // make sure the currSlide value is not too low or high
        if ( currSlide > maxSlide ) currSlide = 0;
        else if ( currSlide < 0 ) currSlide = maxSlide;
        
        // animate the slide reel
        $slideReel.animate({
            left : currSlide * -$(window).width()
        }, 400, 'swing', function() {
            // hide / show the arrows depending on which frame it's on
            if ( currSlide == 0 ) $slideLeftNav.hide();
            else $slideLeftNav.show();
            
            if ( currSlide == maxSlide ) $slideRightNav.hide();
            else $slideRightNav.show();
            
        });
        
    }
    
    function nextSlide() {
        changeSlide( currSlide + 1 );
    }
    
    // define some variables / DOM references
    var activeSlideshow = true,
    currSlide = 0,
    slideTimeout,
    $slideshow = $('#carousel'),
    $slideReel = $slideshow.find('#slides'),
    maxSlide = $slideReel.children().length - 1,
    $slideLeftNav = $slideshow.find('#left-button'),
    $slideRightNav = $slideshow.find('#right-button');
    
    // set navigation click events
    
    // left arrow
    $slideLeftNav.click(function(ev) {
        ev.preventDefault();
        
        activeSlideshow = false;
        
        changeSlide( currSlide - 1 );
    });
    
    // right arrow
    $slideRightNav.click(function(ev) {
        ev.preventDefault();
        
        activeSlideshow = false;
        
        changeSlide( currSlide + 1 );
    });
    
});