$(document).ready(function () {
  // about us section
  handleAboutSectionEvents();

  // testimonials section
  loadTestimonials(0);
  testimonialArrowsState();
  testimonialArrowsHandler();

  // faqs
  loadFAQs();
  handleFAQ();
});
