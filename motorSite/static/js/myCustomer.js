$(function() {
        const envi = 'local';

        if(envi == 'local'){
        }else{
            console.log = function(){};
            console.dir = function(){};
            console.info = function(){};
            console.debug = function(){};
            console.warn = function(){};
        }

        $(document).on('scroll', function(){
            if($(document).scrollTop() > 0){
                $('.secondPageNav').slideUp();
                $('.timeLine-wrap').css({
                    "top" : "0px"
                });
            }else{
                $('secondPageNav').slideDown();
                $('.timeLine-wrap').css({
                    "top" : "68px"
                });
            }
        });

    $(document).on('click', '#likeToInsured', function(){
        $('html, body').animate({
            scrollTop: $("#scrollFlag").offset().top - 66
        }, 1000);
    });
    
    $(document).ready(function(){
         var judge = $('#judge').val();
         if(judge == 'true'){
             $('#logoImg').attr('src', 'css/img/logo.png');
             $(document).on('scroll', function(){
                if($(document).scrollTop() > 0){
                    $('.secondPageNav').slideUp();
                    $('.timeLine-wrap').css({
                        "top" : "0px"
                    });
                }else{
                    $('secondPageNav').slideDown();
                    $('.timeLine-wrap').css({
                        "top" : "68px"
                    });
                }
            });
         }else if(judge == 'false'){            
            $(document).on('scroll', function(){               
                console.log($(document).scrollTop());
                if($(document).scrollTop() > 733){
                    $('.navbar-default').css({
                        "background-color" : "white",
                    });
                    $('#navbar ul li a').css({
                        "color": "#777",
                        "text-shadow": "2px 2px 2px #fff"
                    });
                    $('#navbar').css({
                        "background-color":  "transparent",
                    })
                    $('#logoImg').attr('src', 'css/img/logo.png');
                }else{
                    $('.navbar-default').css({
                        "background-color" : "transparent"
                    });
                    $('#navbar ul li a').css({
                        "color": "#fff",
                        "text-shadow": "2px 2px 2px black"
                    });
                    $('#navbar').css({
                        "background-color":  "rgba(0, 0, 0, 0.56)",
                    });
                    $('#logoImg').attr('src', 'css/img/logoWhite.png');
                } 
            });
         }      
    });

    //session Detector part
    var sessionDetector = function() {
        var timeout;
        document.onmousemove = function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = './index.html';
            }, 1800000);
        }
        //for mobile session 
        $(document).on('click', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = './index.html';
            }, 1800000);
        });
        $(document).on('scroll', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = './index.html';
            }, 1800000);
        });
    }
    sessionDetector();
    
});