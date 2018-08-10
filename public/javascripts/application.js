// let likesCount = 0;
// $(window).on('scroll', function(){
//     let ultimoScroll = 0;
//     let scrollActual = $(window).scrollTop();
    
//     if (scrollActual > ultimoScroll) {
//         $('.main-nav').addClass('oculto');
//     } else {
//         $('.main-nav').removeClass('oculto');
//     }
//     ultimoScroll = scrollActual; 
// }); 

$(window).on('scroll', function(){
    
    var scrolled = $(window).scrollTop();
    console.log(scrolled);

    // $('.fondo-paisaje').css('transform','translateX(' + -scrolled * 0.1 + 'px)');
    $('.globo1').css('transform', 'translateY(' + scrolled * .1 + 'px)');
    $('.globo2').css('transform', 'translateY(' + -scrolled * .2 + 'px)');

});








//CANVAS

// $(window).on('load', ()=>{ 

// var canvas = document.getElementById('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var background = new Background(canvas, '/images/montanhas.jpg');
// });


// function Background(canvas, background){
//     this.ctx = canvas.getContext("2d");    

//     this.img = new Image();
//     this.img.src = background;

// this.x = 0;
// this.y = 0;
// this.w = this.ctx.canvas.width;
// this.h = this.ctx.canvas.height;

// this.vx = 7;
// }

// Background.prototype.move = function() {
//     this.x -= this.vx;

//     if (this.x + this.w <= 0) {        
//         this.x = 0;
//     }
// };


