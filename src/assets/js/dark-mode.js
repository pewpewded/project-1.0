/* deciding what theme to use depending on local
  Storage data and the prefered color scheme */
let idk;

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  idk = "dark";
} else {
  document.documentElement.classList.remove("dark");
}

let toggleDarkIcon = document.getElementById("dark-icon");
let toggleLightIcon = document.getElementById("light-icon");

// changing the icon depending on the theme

if (idk == "dark") {
  toggleLightIcon.classList.remove("hidden");
} else {
  toggleDarkIcon.classList.remove("hidden");
}

let themeToggleBtn = document.getElementById("theme-toggle");

// event listner

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  toggleDarkIcon.classList.toggle("hidden");
  toggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if no prev local storage data
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
