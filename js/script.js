$(document).ready(function(){
	//smooth scrolling
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

//carousel
$(function() {
    function changeSlide( newSlide ) {
        currSlide = newSlide;
        
        if ( currSlide > maxSlide ) currSlide = 0;
        else if ( currSlide < 0 ) currSlide = maxSlide;
        
        // animate the slide reel
        $slides.animate({ left : currSlide * -$(window).width() }, 400, 'swing', function() {
            if ( currSlide == 0 ) $leftnav.hide();
            else $leftnav.show();
            
            if ( currSlide == maxSlide ) $rightnav.hide();
            else $rightnav.show();
        });        
    }
    
    function nextSlide() {
        changeSlide( currSlide + 1 );
    }
    
    var currSlide = 0,
    $carousel = $('#carousel'),
    $slides = $carousel.find('#slides'),
    maxSlide = $slides.children().length - 1,
    $leftnav = $carousel.find('#left-button'),
    $rightnav = $carousel.find('#right-button');
    
    // left arrow
    $leftnav.click(function(ev) {
        ev.preventDefault();     
        changeSlide( currSlide - 1 );
    });
    
    // right arrow
    $rightnav.click(function(ev) {
        ev.preventDefault();
        changeSlide( currSlide + 1 );
    });
    
});