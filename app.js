const Toastify = require("toastify-js");

const colorBg1DarkerDark = "#000000";
const colorBg2Dark = "#4b096c";

const colorBg1DarkerLight = "#006b79";
const colorBg2Light = "#029c1c";
const colorBg2DarkerLight = "#005e14";

const paragraphs = document.querySelectorAll("p");
const tds = document.querySelectorAll("td");

document.getElementById("dark-light-btn").onclick = (e) => {
  const element = e.target;
  if (element.classList.contains("dark")) {
    element.innerHTML = "Dark Mode";
    element.classList.remove("dark");
    document.documentElement.style.setProperty(
      "--color-background-1",
      colorBg1DarkerLight
    );
    document.documentElement.style.setProperty(
      "--color-background-2",
      colorBg2Light
    );
    document.documentElement.style.setProperty(
      "--color-background-2-darker",
      colorBg2DarkerLight
    );
  } else {
    element.innerHTML = "Light Mode";
    element.classList.add("dark");
    document.documentElement.style.setProperty(
      "--color-background-1",
      colorBg1DarkerDark
    );
    document.documentElement.style.setProperty(
      "--color-background-2",
      colorBg2Dark
    );
    document.documentElement.style.setProperty(
      "--color-background-2-darker",
      colorBg1DarkerDark
    );
  }
};

document.getElementById("search-btn").onclick = (e) => {
  const inputValue = document.getElementById("search").value.toLowerCase();
  const vals = [];
  if (inputValue) {
    paragraphs.forEach((paragraph) => {
      if (paragraph.innerHTML.toLowerCase().includes(inputValue)) {
        vals.push(paragraph);
      }
    });
    tds.forEach((td) => {
      if (td.innerHTML.toLowerCase().includes(inputValue)) {
        vals.push(td);
      }
    });

    vals.forEach((val) => {
      val.style.background = "#597800";
    });
  }

  Toastify({
    text: `${vals.length} results found.`,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #029c1c , #4b096c)",
    },
  }).showToast();

  setTimeout(() => {
    vals.forEach((val) => {
      val.style.background = 0;
    });
  }, 5000);
};
