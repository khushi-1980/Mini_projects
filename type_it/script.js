const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "A day in the life of a cereal box",
  "What if clouds had opinions?",
  "Why do cats act like they pay rent?",
  "Do fish get bored of swimming?",
  "What's your secret superhero name?",
  "Where would you time travel if clocks had wings?",
  "This sentence contains zero useful information",
  "What’s the deal with sandwiches missing corners?",
  "New inventions nobody asked for",
  "Is walking just controlled falling?",
  "Why do we love staring at campfires?",
  "Which ice cream flavor defines your personality?",
  "What is 'vibing' and can it be bottled?",
  "Why do socks disappear into the void?",
];


const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}