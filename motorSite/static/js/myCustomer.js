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

    $(document).on('click', '#likeToInsured', function(){
        $('html, body').animate({
            scrollTop: $("#myProducts").offset().top - 66
        }, 1000);
    });

    $(document).ready(function(){
        $(document).on('scroll', function(){
            console.log($(document).scrollTop());
            if($(document).scrollTop() > 600){
                $('#defaultIndex').css({
                    "background-color" : "white",
                });
                $('#defaultIndex ul li p').css({
                    "color": "#777"
                });
                $('#defaultIndex img').attr('src', '../static/assets/logo.png');
            }else{
                $('#defaultIndex').css({
                    "background-color" : "transparent"
                });
                $('#defaultIndex ul li p').css({
                    "color": "#fff",
                });
                $('#defaultIndex img').attr('src', '../static/assets/logoWhite.png');
            }
        });
    });

    //session Detector part
    var sessionDetector = function() {
        var timeout;
        document.onmousemove = function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = '../../../index.html';
            }, 1800000);
        }
        //for mobile session
        $(document).on('click', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = '../../../index.html';
            }, 1800000);
        });
        $(document).on('scroll', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = '../../../index.html';
            }, 1800000);
        });
    }
    sessionDetector();
});
