'use strict';
(function(){
    //AOS INIT
    AOS.init({
        delay: 200,
        duration: 800,

    });
    // preloader Code 
    window.addEventListener('load', function(){
        document.querySelector('div.preloader').style='display:none';
    })
    // typig Effect Code 
    let typed = new Typed('#typing', {
        strings: ['Front End Developer', 'Back End Developer','Wordpress Development','Grapic Designer','Freelancer'],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100,
        backDelay: 1000,
        shuffle: true,
      });

})();