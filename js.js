const input = document.querySelector("#textarea");
const countCircle = document.querySelector("#countCircle ");
const progressCircle = document.querySelector("#progressCircle");
const number = document.querySelector("#number");
const button = document.querySelector("#post");
const maxLyrics = 280;

input.addEventListener("input", updateCounter);

function updateCounter() {
  const textAreaValue = input.value.length;
  const lyricsRemaining = maxLyrics - textAreaValue;

  const percentage = (textAreaValue / maxLyrics) * 100;
  const dashOffset = 100 - percentage;

  progressCircle.style.strokeDashoffset = dashOffset;

  console.log(textAreaValue);

  if (textAreaValue >= 260 && textAreaValue < maxLyrics) {
    progressCircle.style.stroke = "#FCDC58";
    number.innerHTML = lyricsRemaining;
    number.style.visibility = "visible";
    button.classList.remove("change");
  } else if (textAreaValue >= maxLyrics) {
    progressCircle.style.stroke = "#F4212E";
    number.style.visibility = "visible";
    number.innerHTML = lyricsRemaining;
    button.classList.add("change");
  } else {
    progressCircle.style.stroke = "#1F9BF0";
    number.style.visibility = "hidden";
  }
  if (textAreaValue >= 285) {
    progressCircle.style.stroke = "transparent";
    countCircle.style.stroke = "transparent";
  }
}
