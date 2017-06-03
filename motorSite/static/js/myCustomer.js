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
    $(window).resize(function(){
      if ($(window).width() < 500) {
        $('.first-slide').attr('src', './assets/banner.jpg');
        $(document).on('click', '#likeToInsured', function(){
          $('html, body').animate({
            scrollTop: $("#myProducts").offset().top - 183
          }, 1000);
        });
      } else {
        $('.first-slide').attr('src', './static/css/img/banner.jpg');
        $(document).on('click', '#likeToInsured', function(){
          $('html, body').animate({
            scrollTop: $("#myProducts").offset().top - 200
          }, 1000);
        });
      }
    });

    $('#defaultIndex .navbar-header').css({
      "background-color" : "rgba(0, 0, 0, 0.56)",
    });
    $(document).ready(function(){
        $(document).on('scroll', function(){
          console.log($(document).scrollTop())
            if($(document).scrollTop() > 400){
              $('#defaultIndex .navbar-header').css({
                "background-color" : "white",
              });
              $('#defaultIndex #navbar').css({
                  "background-color" : "white",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#777"
              });
              $('#defaultIndex img').attr('src', './static/assets/logo.png');
            }else{
              $('#defaultIndex #navbar').css({
                  "background-color" : "rgba(0, 0, 0, 0.56)"
              });
              $('#defaultIndex .navbar-header').css({
                "background-color" : "rgba(0, 0, 0, 0.56)",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#fff",
              });
              $('#defaultIndex img').attr('src', './static/assets/logoWhite.png');
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
