$(document).ready(function() {
  // Random hero image on pageload
  let heroImages = ["HERO 1.jpg", "HERO 2.jpg", "HERO 3.jpg"];
  $("#hero").css("background", "url('../assets/" + heroImages[Math.floor(Math.random() * heroImages.length)] +"')");

  // Video player animates in on scroll
  $(window).scroll(function() {
    $(".video").css("transform", "translateY(0px)").css("opacity", "1");
  });

  // Content Copy animate on scroll
  $(window).on('scroll', function() {
    let y_scroll_pos = window.pageYOffset;
    let scroll_pos_test = 350;

    if(y_scroll_pos > scroll_pos_test) {
      $(".copy").css("transform", "translateX(0px)").css("opacity", "1");

      $(".grid-image").each(function(i) {
        setTimeout(function() {
          $(".grid-image").eq(i).css("transform", "scale(1)").css("opacity", "1");
        }, 200 * i);
      });

    }

  });

  // Grid images animate on scroll

});
