function handleAboutSectionEvents() {
  const whoWeAre = $("#tab-item-1");
  const vision = $("#tab-item-2");
  const whatWeDo = $("#tab-item-3");

  const whoWeAreContent = $("#tab-content-1");
  const visionContent = $("#tab-content-2");
  const whatWeDoContent = $("#tab-content-3");

  whoWeAre.click(function () {
    whoWeAreContent.addClass("active");
    visionContent.removeClass("active");
    whatWeDoContent.removeClass("active");

    whoWeAre.addClass("active");
    vision.removeClass("active");
    whatWeDo.removeClass("active");
  });

  vision.click(function () {
    whoWeAreContent.removeClass("active");
    visionContent.addClass("active");
    whatWeDoContent.removeClass("active");

    whoWeAre.removeClass("active");
    vision.addClass("active");
    whatWeDo.removeClass("active");
  });

  whatWeDo.click(function () {
    whoWeAreContent.removeClass("active");
    visionContent.removeClass("active");
    whatWeDoContent.addClass("active");

    whoWeAre.removeClass("active");
    vision.removeClass("active");
    whatWeDo.addClass("active");
  });
}
