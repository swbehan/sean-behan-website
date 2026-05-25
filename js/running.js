document.addEventListener("scroll", () => {
  const allKeyStatCards = Array.from(
    document.querySelectorAll(".card-stats .card"),
  );
  const highSchoolImgCaption = document.querySelector(".highschool-text");
  const windowInnerHeight = window.innerHeight;
  const footStepsImgs = Array.from(
    document.querySelectorAll(".top-footprints span img"),
  );
  for (const footStep of footStepsImgs) {
    const footStepPosition = footStep.getBoundingClientRect().top;
    if (footStepPosition <= windowInnerHeight) {
      footStep.classList.add("reveal-foot");
    }

    if (footStepPosition >= windowInnerHeight) {
      footStep.classList.remove("reveal-foot");
    }
  }

  for (const card of allKeyStatCards) {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition <= windowInnerHeight) {
      card.classList.add("card-animation");
    }

    if (cardPosition >= windowInnerHeight) {
      card.classList.remove("card-animation");
    }
  }

  if (highSchoolImgCaption.getBoundingClientRect().top <= windowInnerHeight) {
    highSchoolImgCaption.classList.add("visible");
  }
});
