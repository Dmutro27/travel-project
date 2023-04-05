var owl = $('.owl-carousel');
owl.owlCarousel({
      center: true,
      loop: true,
      margin: 30,
      startPosition: 1,
      items: 3
});
  
$('.slider-btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider-btn--next').click(function () {
   owl.trigger('next.owl.carousel');
});

