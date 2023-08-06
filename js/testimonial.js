const testimonials = [
  {
    id: 1,
    testimonial:
      "Just simply amazing. Feel lucky use their service. Highly appreciate their services & highly recommended to others.",
    personalName: "Jimmy Klein",
    personalLoc: "California, USA",
    imagePath: "assets/testimonial/test-1.png",
  },
  {
    id: 2,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores cumque pariatur mollitia deleniti qui? Dolor.",
    personalName: "Sandra Bullock",
    personalLoc: "Ohio, USA",
    imagePath: "assets/testimonial/test-2.png",
  },
  {
    id: 3,
    testimonial:
      "Facere neque necessitatibus eum quos, veniam nobis ex voluptas quibusdam quod iure velit quasi, ipsam fuga labore voluptatibus in atque.",
    personalName: "Ana Armas",
    personalLoc: "Georgia, USA",
    imagePath: "assets/testimonial/test-3.png",
  },
];

let currTestimonialIdx = 0;

// initial testimonial
function loadTestimonials(index) {
  const testimonialImage = $("#testimonial-img");
  const testimonialSmall = $("#testimonial-img-small");
  const testimonial = $("#testimonial");
  const testimonialBy = $("#testimonial-by");

  testimonialImage.attr("src", testimonials[index].imagePath);
  testimonialSmall.attr("src", testimonials[index].imagePath);
  testimonial.html(`${testimonials[index].testimonial}`);
  testimonialBy.html(
    `${testimonials[index].personalName} <span class="text-small text-grey">, ${testimonials[index].personalLoc}</span>`
  );
}

function testimonialArrowsState() {
  if (currTestimonialIdx <= 0) {
    console.log("zero");
    $("#arrow-left").css({ opacity: "0.1", pointerEvents: "none" });
    $("#arrow-right").css({ opacity: "1", pointerEvents: "unset" });
  } else if (currTestimonialIdx >= testimonials.length - 1) {
    console.log("more");
    $("#arrow-left").css({ opacity: "1", pointerEvents: "unset" });
    $("#arrow-right").css({ opacity: "0.1", pointerEvents: "none" });
  } else {
    console.log("mid");
    $("#arrow-left").css({ opacity: "1", pointerEvents: "unset" });
    $("#arrow-right").css({ opacity: "1", pointerEvents: "unset" });
  }
}

function testimonialArrowsHandler() {
  $("#arrow-left").click(function () {
    currTestimonialIdx -= 1;
    testimonialArrowsState();
    loadTestimonials(currTestimonialIdx);
  });
  $("#arrow-right").click(function () {
    currTestimonialIdx += 1;
    testimonialArrowsState();
    loadTestimonials(currTestimonialIdx);
  });
}

function testimonialAutoScroll() {
  if (currTestimonialIdx >= testimonials.length - 1) {
    currTestimonialIdx = 0;
    testimonialArrowsState();
    loadTestimonials(0);
  } else {
    $("#arrow-right").trigger("click");
  }
}

let scrollInterval = setInterval(testimonialAutoScroll, 5000);

$(".testimonials-container").hover(
  function () {
    clearInterval(scrollInterval);
  },
  function () {
    scrollInterval = setInterval(testimonialAutoScroll, 5000);
  }
);
