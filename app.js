const colorBg1DarkerDark = "#000000";
const colorBg2Dark = "#4b096c";
const colorBg2DarkerDark = "#260536";

const colorBg1DarkerLight = "#006b79";
const colorBg2Light = "#029c1c";
const colorBg2DarkerLight = "#005e14";

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
