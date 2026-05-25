document.addEventListener("scroll", () => {
  const windowInnerHeight = window.innerHeight;

  const vinylBlocks = Array.from(
    document.querySelectorAll(".vinyl-record-block"),
  );
  for (const block of vinylBlocks) {
    const blockPosition = block.getBoundingClientRect().top;
    if (blockPosition <= windowInnerHeight) {
      block.classList.add("visible");
    }

    if (blockPosition >= windowInnerHeight) {
      block.classList.remove("visible");
    }
  }

  const timelineCards = Array.from(
    document.querySelectorAll(".favorite-movies .timeline .card"),
  );
  for (const card of timelineCards) {
    const cardPosition = card.getBoundingClientRect().top;
    if (cardPosition <= windowInnerHeight) {
      card.classList.add("card-animation");
    }

    if (cardPosition >= windowInnerHeight) {
      card.classList.remove("card-animation");
    }
  }
});
