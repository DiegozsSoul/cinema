$('.trigger, .schedule-close').click(function() {
    $('.slider').toggleClass('close');
  });

$('.hamburger-menu, .menu-close').click(function() {
    $('.slider-menu').toggleClass('close-2');
});
$('.trigger-button, .trailer-close').click(function() {
    $('.slider-trailer').toggleClass('close-3');
});
$(document).ready(function(){
    //create variable
    var counts = 0;
    $(".ticket").click(function () {
    //to number and increase to 1 on each click
       counts += +1;
       $(".cart-plus").animate({
    //show span with number
                 opacity: 1
             }, 300, function () {
    //write number of counts into span
                 $(this).text(counts);
             });
         }); 
 });