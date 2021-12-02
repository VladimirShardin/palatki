$(document).ready(function(){
    $('.header-arrow').on('click', function(event){
        event.preventDefault()

        const top = $('.portfolio').offset().top
        console.log(top)
         $('html, body').animate({
             scrollTop: top
         }, 1000);
    });
});
