const themeToggle = document.querySelector("#theme-toggle");
const statusText = document.querySelector("#status-text");

const themes = {
  sunrise: "sunrise",
  lagoon: "lagoon",
};

let currentTheme = themes.sunrise;

themeToggle?.addEventListener("click", () => {
  currentTheme = currentTheme === themes.sunrise ? themes.lagoon : themes.sunrise;

  if (currentTheme === themes.sunrise) {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", currentTheme);
  }

  if (statusText) {
    statusText.textContent = `Accent mode: ${currentTheme}`;
  }
});