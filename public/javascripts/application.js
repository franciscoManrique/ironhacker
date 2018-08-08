// let likesCount = 0;
$(window).on('scroll', function(){
    let ultimoScroll = 0;
    let scrollActual = $(window).scrollTop();
    
    if (scrollActual > ultimoScroll) {
        $('.main-nav').addClass('oculto');
    } else {
        $('.main-nav').removeClass('oculto');
    }
    ultimoScroll = scrollActual; 
});
