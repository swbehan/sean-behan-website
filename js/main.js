// Countdown text for Runner image at top
const onYourMarkText = document.querySelector(".on-your-mark");
const getSetText = document.querySelector(".get-set");
const goText = document.querySelector(".go");
setTimeout(() => {
  onYourMarkText.classList.add("hidden");
  getSetText.classList.add("visible");
}, 2000);
setTimeout(() => {
  getSetText.classList.remove("visible");
  goText.classList.add("visible");
}, 4000);
setTimeout(() => {
  goText.classList.remove("visible");
}, 6000);

// Runner Animation at top of page
//when scrollY goes from 0 to window.innerHeight, the runner moves from left to right and reveals letters one by one.
document.addEventListener("scroll", () => {
  const pixelsScrolledFromTop = window.scrollY;
  const allNameLetters = Array.from(document.querySelectorAll(".letter"));
  const startingRunnerImg = document.querySelector(".starting-runner");
  const currentlyRunningImg = document.querySelector(".currently-running");
  const sectionHeight = document.querySelector(".name-animation").offsetHeight;
  const windowInnerHeight = window.innerHeight;
  const percentage = (pixelsScrolledFromTop / sectionHeight) * 140;
  for (const letter of allNameLetters) {
    if (windowInnerHeight / 9 <= pixelsScrolledFromTop) {
      currentlyRunningImg.classList.add("revealed");
      startingRunnerImg.classList.add("hidden");
    } else if (windowInnerHeight / 9 >= pixelsScrolledFromTop) {
      currentlyRunningImg.classList.remove("revealed");
      startingRunnerImg.classList.remove("hidden");
    }

    if (
      (windowInnerHeight / 9) * (allNameLetters.indexOf(letter) + 1) <=
      pixelsScrolledFromTop
    ) {
      letter.classList.add("revealed");
      currentlyRunningImg.style.left = `${Math.min(percentage, 100)}%`;
    } else if (
      (windowInnerHeight / 9) * (allNameLetters.indexOf(letter) + 1) >=
      pixelsScrolledFromTop
    ) {
      letter.classList.remove("revealed");
    }
  }
  if (Math.min(percentage, 100) >= 100) {
    currentlyRunningImg.classList.remove("revealed");
  } else {
    currentlyRunningImg.style.left = `${percentage}%`;
  }
});

// Image Carosel
const captions = [
  "Sant Jeroni, Montserrat",
  "Frosty Half Marathon",
  "NUCR Formal",
  "My Brothers and I",
  "NIRCA Spring Nationals 2025",
  "Halloween 2025",
  "Study Abroad Group 2025",
];
const caroselImgList = Array.from(document.querySelectorAll(".carousel ol li"));
const caroselCaption = document.querySelector(".carousel-caption");
let activeIndex = 1;
updateCarousel();

function updateCarousel() {
  for (const carouselImg of caroselImgList) {
    carouselImg.classList.remove("carousel-img-primary");
    carouselImg.classList.remove("carousel-img-secondary-left");
    carouselImg.classList.remove("carousel-img-secondary-right");
  }
  caroselImgList[activeIndex].classList.add("carousel-img-primary");
  caroselCaption.textContent = captions[activeIndex];
  caroselImgList[
    (activeIndex - 1 + caroselImgList.length) % caroselImgList.length
  ].classList.add("carousel-img-secondary-left");
  caroselImgList[(activeIndex + 1) % caroselImgList.length].classList.add(
    "carousel-img-secondary-right",
  );
}

const leftNextButton = document.querySelector(".left-next-button");
const rightNextButton = document.querySelector(".right-next-button");

leftNextButton.addEventListener("click", () => {
  activeIndex =
    (activeIndex - 1 + caroselImgList.length) % caroselImgList.length;
  updateCarousel();
});

rightNextButton.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % caroselImgList.length;
  updateCarousel();
});
