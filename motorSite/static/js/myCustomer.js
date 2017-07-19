$(function() {
        const urlEndForCache = 'v5'
        const envi = 'prod';
        if(envi == 'local'){
        }else{
            console.log = function(){};
            console.dir = function(){};
            console.info = function(){};
            console.debug = function(){};
            console.warn = function(){};
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
              $('.navbar-default .navbar-toggle .icon-bar').css({
                "background-color" : "#ddd",
              });
              if($(document).width() < 767) {
                $('#navbar.navbar-collapse.collapse').css({
                  "background-color" : "rgba(0, 0, 0, 0.56)"
                });
              };
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

    var idleTime = 0;
    $(document).ready(function () {
      //Increment the idle time counter every minute.
      var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

      //Zero the idle timer on mouse movement.
      $(this).mousemove(function (e) {
        idleTime = 0;
      });
      $(this).keypress(function (e) {
        idleTime = 0;
      });
    });

    function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 29) { // 20 minutes
        window.location.href = 'index.html';
      }
    }

    //session Detector part
    var sessionDetector = function() {
        var timeout;
        timeout = setTimeout(function(){
          window.location.href = 'index.html';
        }, 1800000);
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
