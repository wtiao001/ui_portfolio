// , 2000, function() {
//              window.location.href = "test.html";
//            });   
//            $('.project-bubble').click(function(){
//                $('.project-bubble').addClass('active');
//                $('.project-bubble-wrap').addClass('scene-element');
//                $('.project-bubble-wrap').addClass('scene-animation');
//                $(this).addClass('no-hover');
//            });
//            $('.project-bubble').click(function(){
//                setTimeout(function(){
//                    {$("html,body").animate({scrollTop:$(".background").offset().top},"0");return false};
//                },300);
//            });
//    
//    
//    
//            $('.project-bubble').click(function(){
//                $('.background').css({"display":"none"});
//            }); 
//            $('.project-bubble').click(function(){
//                $('.amazon-project-content').addClass('active');
//                $('.projects-wrap').addClass('active');
//            });
//            $('.project-bubble').click(function(){
//                $('.amazon-img').addClass('active');
//            }); 
//            $('.project-bubble').click(function(){
//                $('.home-buttons').css({"display":"none"});
//            }); 
//            $('.project-bubble').click(function(){
//                $('.amazon-mockup').css({"visibility":"visible"});
//                $('.amazon-mockup').css({"opacity":"1"});
//            }); 
//            $('.project-bubble').click(function(){
//                $('.back-button').css({"visibility":"visible"});
//                $('.back-button').css({"opacity":"1"});
//            }); 
//            $('.project-bubble').click(function(){
//                $('.project-bubble2').css({"display":"none"});
//                $('.project-bubble3').css({"display":"none"});
//            }); 
//            

    

    // MUSEUM PROJECT CLICK
            $('.project-bubble2').click(function(){
                $('.project-bubble2').addClass('active');
                    $(this).addClass('no-hover');
            });
            $('.project-bubble2').click(function(){
                setTimeout(function(){
                    {$("html,body").animate({scrollTop:$(".background").offset().top},"0");return false};
                },300);
            });
    
    
    
            $('.project-bubble2').click(function(){
                $('.background').css({"display":"none"});
            }); 
            $('.project-bubble2').click(function(){
                $('.museum-project-content').addClass('active');
                $('.projects-wrap').addClass('active');
            });
            $('.project-bubble2').click(function(){
                $('.museum-img').addClass('active');
            }); 
            $('.project-bubble2').click(function(){
                $('.home-buttons').css({"display":"none"});
            }); 
//            $('.project-bubble').click(function(){
//                $('.amazon-mockup').css({"visibility":"visible"});
//                $('.amazon-mockup').css({"opacity":"1"});
//            }); 
            $('.project-bubble2').click(function(){
                $('.back-button').css({"visibility":"visible"});
                $('.back-button').css({"opacity":"1"});
            }); 
            $('.project-bubble2').click(function(){
                $('.project-bubble').css({"display":"none"});
                $('.project-bubble3').css({"display":"none"});
            }); 
    
    // PROJECT HTML LOAD 
            $(function(){
//                $("#amazon_content").load("amazon.html");
//                $("#museum_content").load("museum.html"); 
//                $("#amazon_content").load("amazon.html"); 
//                $("#amazon_content").load("amazon.html"); 
            });
    
    // BACK BUTTON CLICK
            $('.back-button').click(function(){
                $('.background').css({"display":"block"});
                setTimeout(function(){
                    {$("html,body").animate({scrollTop:$(".projects-wrap").offset().top},"500");return false};
                },0);
                
                // Amazon return
                $('.project-bubble').removeClass('active');
                $('.project-bubble').removeClass('no-hover');
                $('.amazon-project-content').removeClass('active');
                $('.amazon-img').removeClass('active');
                $('.amazon-mockup').css({"opacity":"0"});
                setTimeout(function(){
                $('.amazon-mockup').css({"visibility":"hidden"});
                },300);
                
                // Museum return
                $('.project-bubble2').removeClass('active');
                $('.project-bubble2').removeClass('no-hover');
                $('.museum-img').removeClass('active');
                $('.home-buttons').css({"display":"block"});
                $('.back-button').css({"visibility":"hidden"});
                $('.museum-project-content').removeClass('active');
                
                
                $('.project-bubble').css({"display":"inline-block"});
                $('.project-bubble2').css({"display":"inline-block"});
                $('.project-bubble3').css({"display":"inline-block"});
//             
            }); 
    
    
                
//            $('.project-bubble').click(function(){
//                $('.projects-wrap').css({"padding":"0"});
//            }); 

// GRAPH YEAR CLICK
            $('.year2').click(function(){
                $('.pieSlice1, .pieSlice2, .pieSlice3, .pieSlice4, .amazon-bar, .google-bar, .other-bar, .bottom-bar').addClass('active');
            });
            $('.year1').click(function(){
                $('.pieSlice1, .pieSlice2, .pieSlice3, .pieSlice4, .amazon-bar, .google-bar, .other-bar, .bottom-bar').removeClass('active');
            });
    $(document).ready(function(){
    
// MORE PROJECTS CLICK
        $('.more-button').click(function(){
            $('.more-move').addClass('clicked');
            $('.more-projects').addClass('more');
            $('.less-button').css({"opacity":"1"});
            $('.more-button').css({"opacity":"0"});
        }); 
        $('.less-button').click(function(){
            $('.more-move').removeClass('clicked');
            $('.more-projects').removeClass('more');
            $('.more-button').css({"opacity":"1"});
            $('.less-button').css({"opacity":"0"});
        }); 
        });