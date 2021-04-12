$(document).ready(function(){

let $btns = $('.travel-area .buttons-group button');


$btns.click(function (e) {

$('.travel-area .buttons-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
        $('.travel-area .grid').isotope({
        filter: selector
        });

        return false;
})

//$('.travel-area .buttons-group #btn1').trigger('click');

$('.travel-area .grid').isotope({
    filter: '*'
    });

    return false;

})
