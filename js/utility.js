$(document).ready(function () {
    // auto expand text area
    $('.new-quote').on( 'keyup', 'textarea', function (e){
        $(this).css('height', 'auto' );
        $(this).height( this.scrollHeight );
    });
    $('#quote-area').blur(function () {
        $(this).css('height', '30px');
    });
    // $('.new-quote').find( 'textarea' ).keyup(function() {
    //     });
});