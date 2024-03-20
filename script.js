const quoteBtn = document.getElementById("new-btn");
const quoteAuthor = document.getElementById("quote-author");
const quoteText = document.getElementById("quote-text");
const container = document.getElementById("container");
const quoteIcon = document.getElementById("quote-icon");
const twitter = document.getElementById("twitter");
const tumblr = document.getElementById("tumblr");

const api_url = "https://api.quotable.io/random";
let length = 100;

function renderQuote(d) {
  if (d.length > 80) {
    randomQuote();
  } else {
    quoteText.innerHTML = d.content;
    quoteAuthor.innerHTML = "- " + d.author;
    quoteBtn.innerHTML = "New quote";
  }
}

function randomQuote() {
  quoteBtn.innerHTML = "Loading...";
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => renderQuote(data));
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

quoteBtn.addEventListener("click", function () {
  if (quoteBtn.textContent === "New quote") {
    randomQuote();
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    container.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
    quoteBtn.style.backgroundColor =
      quoteIcon.style.color =
      quoteText.style.color =
      quoteAuthor.style.color =
      twitter.style.color =
      tumblr.style.color =
        `${color1}`;
  } else if (quoteBtn.textContent === "Loading...") {
    quoteBtn.classList.add("disabled");
  }
  quoteBtn.classList.remove("disabled");
});