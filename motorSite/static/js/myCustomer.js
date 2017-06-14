$(function() {
        const urlEndForCache = 'v3'
        const envi = 'prod';
        if(envi == 'local'){
        }else{
            console.log = function(){};
            console.dir = function(){};
            console.info = function(){};
            console.debug = function(){};
            console.warn = function(){};
        }
    if ($(window).width() < 500) {
      $('.first-slide').attr('src', './static/css/img/mobileBanner.jpg' + '?' + urlEndForCache);
      $('.first-slide').css('min-width', '800px');
      $(document).on('click', '#likeToInsured', function(){
        $('html, body').animate({
          scrollTop: $("#myProducts").offset().top - 183
        }, 500);
      });
    } else {
      $('.first-slide').attr('src', './static/css/img/banner.jpg' + '?' + urlEndForCache);
      $(document).on('click', '#likeToInsured', function(){
        $('html, body').animate({
          scrollTop: $("#myProducts").offset().top - 200
        }, 500);
      });
    }

    $('#defaultIndex').css({
      "background-color" : "rgba(0, 0, 0, 0.56)",
    });
    $(document).ready(function(){
        $(document).on('scroll', function(){
          console.log($(document).scrollTop())
            if($(document).scrollTop() > 400){
              $('#defaultIndex').css({
                "background-color" : "white",
              });
              $('#defaultIndex #navbar').css({
                  "background-color" : "white",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#777"
              });
              $('#defaultIndex img').attr('src', './static/assets/logo.png' + '?' + urlEndForCache);
            }else{
              $('#defaultIndex #navbar').css({
                  "background-color" : "rgba(0, 0, 0, 0.56)"
              });
              $('#defaultIndex').css({
                "background-color" : "rgba(0, 0, 0, 0.56)",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#fff",
              });
              $('#defaultIndex img').attr('src', './static/assets/logoWhite.png' + '?' + urlEndForCache);
            }
        });
    });

    //session Detector part
    var sessionDetector = function() {
        var timeout;
        document.onmousemove = function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        }
        //for mobile session
        $(document).on('click', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        });
        $(document).on('scroll', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        });
    }
    sessionDetector();
});
