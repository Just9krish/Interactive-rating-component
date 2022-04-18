const one = document.querySelector(".card__ratings--item:first-child");
const two = document.querySelector(".card__ratings--item:nth-child(2)");
const three = document.querySelector(".card__ratings--item:nth-child(3)");
const four = document.querySelector(".card__ratings--item:nth-child(4)");
const five = document.querySelector(".card__ratings--item:nth-child(5)");
const ratingText = document.querySelector(".back__card__ratings");
const submit = document.querySelector(".card__submit");
const inner = document.querySelector(".inner");

const stars = [one, two, three, four, five];

let selected = null;

one.addEventListener("click", () => setStars(1));
two.addEventListener("click", () => setStars(2));
three.addEventListener("click", () => setStars(3));
four.addEventListener("click", () => setStars(4));
five.addEventListener("click", () => setStars(5));

function setStars(num) {
  selected = num;
  ratingText.innerText = `You selected ${num} out of 5`;
  clearBackground();
  switch (num) {
    case 1:
      for (let i = 0; i < 1; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 2:
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 3:
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    case 4:
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;

    default:
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setBackground(stars[i]);
        }, 400);
      }
      break;
  }
}

function setBackground(element) {
  element.style.background = `var(--Orange)`;
  element.style.color = `var(--White)`;
}

function clearBackground() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.background = `var(--Medium-Grey)`;
    stars[i].style.color = `var(--Light-Grey)`;
  }
}

submit.addEventListener("click", () => {
  // console.log('heloow')
  if (selected) {
    inner.style.transform = `rotateY(180deg)`;
  } else {
    alert("Plese give rating first!");
  }
});
