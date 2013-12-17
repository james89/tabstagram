function loadIsotope(){
  var items = [];
  var $container = $('#container'),
    // create a clone that will be used for measuring container width
    $containerProxy = $container.clone().empty().css({
      visibility: 'hidden'
    });

  $container.after($containerProxy);

  // get the first item to use for measuring columnWidth
  var $item = $container.find('.item').eq(0);

  $(window).smartresize(function () {
    // calculate columnWidth
    var colWidth = Math.floor($containerProxy.width() / 4);
    // set width of container based on columnWidth
    $container.css({
      width: colWidth * 4
    })
    .isotope({
      // other options...
      // disable automatic resizing when window is resized
      resizable: false,
      // set columnWidth option for masonry
      masonry: {
        columnWidth: colWidth
      }
    });
    // trigger smartresize for first time
  }).smartresize();

  // $('.static a').click(function () {
  //   var selector = $(this).attr('data-filter'); // use a data-* to select the appropriate items
  //   var toTopOffset = 150;

  //   $container.isotope({
  //     filter: selector
  //   });

  //   if ($(window).scrollTop() > toTopOffset) {
  //     $('html, body').animate({
  //       scrollTop: 100
  //     }, 800);
  //   }

  //   return false;
  // });
}
