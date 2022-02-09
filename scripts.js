// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();

    });

    // Animate on scroll - activate
    AOS.init({
        duration: 500
    });
});


lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});