$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    center: true,
    items:1,
    loop:true,
    autoplay:true,
    margin:10,
    
    responsive:{
        400:{
             items:2
        }
    }
    
  })

  $(".owl-carousel").on('changed.owl.carousel', function(event) {
    var currentItem = event.item.index;
    console.log(currentItem + 1);
})



  

  });