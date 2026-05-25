document.addEventListener("scroll", () => {
  const messageBubbles = Array.from(
    document.querySelectorAll(".message-bubble"),
  );
  const windowInnerHeight = window.innerHeight;
  for (const messageBubble of messageBubbles) {
    const messageBubblePosition = messageBubble.getBoundingClientRect().top;
    if (messageBubblePosition <= windowInnerHeight) {
      messageBubble.classList.add("visible");
    }

    if (messageBubblePosition >= windowInnerHeight) {
      messageBubble.classList.remove("visible");
    }
  }
});
