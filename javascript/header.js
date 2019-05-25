// fade in nav text script        
    $(document).ready(function(){
       $(window).scroll(function(){
           if($(window).scrollTop() > 0){
               $(".nav-wrapper").css({"background-color":"white"});
               $(".nav-wrapper").css({"top":"0px"});
           }
           else {
               $(".nav-wrapper").css({"background-color":"transparent"});
               $(".nav-wrapper").css({"top":"20px"});
           }
       });
    });

    $(document).ready(function(){
        $('.menu').click(function(){
            $('.nav').toggleClass('active');
            console.log('toggling');
        });
    });

// hamburger menu script
    $(document).ready(function(){
        $('.hamburger').click(function(){
            $('.menu-button').toggleClass('active');
        }); 
        $('.hamburger').click(function(){
            $('.nav').toggleClass('active');
        }); 
        $('.hamburger').click(function(){
            $('.nav-wrapper').toggleClass('active');
        }); 
    });
    $(document).ready(function(){
        $('.about').click(function(){
            $('.menu-button').removeClass('active');
            $('.nav').removeClass('active');
            $('.nav-wrapper').removeClass('active');
        }); 
        $('.projects').click(function(){
            $('.menu-button').removeClass('active');
            $('.nav').removeClass('active');
            $('.nav-wrapper').removeClass('active');
        }); 
        $('.contact').click(function(){
            $('.menu-button').removeClass('active');
            $('.nav').removeClass('active');
            $('.nav-wrapper').removeClass('active');
        }); 
    });

// color changer        
    $(document).ready(function() {
        var colors = ["indianred", "lightsteelblue", "#6CD77E", "#F0C68E", "#B480D2", "#A3DCC7"];
        var rand = Math.floor(Math.random() * colors.length);
        $('.loader-section, .intro-wrap').css("background-color", colors[rand]);
        $('.contact-text-wrap, .info-title').css("color", colors[rand]);

    });

// smooth scroll script
        $('a[href*="#"]')
         // Remove links that don't actually link to anything
         .not('[href="#"]')
         .not('[href="#0"]')
         .click(function(event) {
           // On-page links
           if (
             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
             &&
             location.hostname == this.hostname
           ) {
             // Figure out element to scroll to
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             // Does a scroll target exist?
             if (target.length) {
               // Only prevent default if animation is actually gonna happen
               event.preventDefault();
               $('html, body').animate({
                 scrollTop: target.offset().top
               }, 700, function() {
                 // Callback after animation
                 // Must change focus!
                 var $target = $(target);
                 $target.focus();
                 if ($target.is(":focus")) { // Checking if the target was focused
                   return false;
                 } else {
                   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                   $target.focus(); // Set focus again
                 };
               });
             }
            }
//            $(window).scroll(function() {
//                  var scroll = $(window).scrollTop();
//                  $(".intro-img.animated").css("transform","translateY(" +  (scroll/5)  + "px)");
//                 $(".about-content").css("transform","translateY(" +  (scroll/10)  + "px)");
//                 $(".intro-image.animated").css("transform","translateY(" +  (scroll/4)  + "px)");
//                });
             });