const slides = document.querySelectorAll(".review-item");
const buttons = document.querySelectorAll(".slide-ctrl-container button");

// console.log(slides, buttons)

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let previous = current > 0 ? current - 1 : slides.length - 1;

const update = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active", "previous", "next");
  })
  slides[current].classList.add('active')
  slides[previous].classList.add('previous')
  slides[next].classList.add('next')
};

const goToNum = (number) => {
  current = number;
  next = current < slides.length - 1 ? current + 1 : 0;
  previous = current > 0 ? current - 1 : slides.length - 1;
  update()
};

const goToNext = () =>
  current < slides.length - 1 ? goToNum(current + 1) : goToNum(0);
const goToPrevious = () =>
  current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener("click", () =>
    i === 0 ? goToPrevious() : goToNext()
  );
}

update()
