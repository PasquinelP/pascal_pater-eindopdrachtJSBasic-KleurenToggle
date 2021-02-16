// Eindopdracht Pascal Pater
// Javascript Basics - KleurenToggle

// get all the needed elements and classes
const body = document.body;
const navButton = document.querySelector(".nav-button");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");
const showColorName = document.querySelector(".color-name");
const navMenuButton = document.querySelector(".nav-menu > li");
const radioButtons = document.querySelectorAll("input[name='selected-color']");
const standardRadioButtonChecked = document.querySelector("input[name='selected-color']");

// make sure standard radio button is checked on refresh
standardRadioButtonChecked.checked = true;

// toggle menu class
const toggleMenu = () => {
  menu.classList.toggle("open");
};

// open or close menu by clicking on the menu icon - (Base requirement)
navButton.addEventListener("click", toggleMenu);

// open menu by hovering over the menu icon - (Bonus requirement)
navMenuButton.addEventListener("mouseover", () => {
  menu.classList.add("open");
});

// closing menu by hovering off the menu icon - (Bonus requirement)
navMenuButton.addEventListener("mouseout", () => {
  menu.classList.remove("open");
});

// set color on body and close menu - (Base requirement)
const toggleColor = (color) => {
  // use className instead of classList.add to remove previous set colors in one go
  // and not use additional removes
  body.className = color;
  toggleMenu();
};

// show chosen color name as text on background - (Bonus requirement)
const updateColorName = (color) => {
  showColorName.innerHTML = "The color you chose is: <br /> <span>" + color + "</span>";
};

// cycle through menuItems
// set color to color class name of clicked menu item
// update color name text on page
// call toggleColor function with the set color
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const color = menuItem.className;
    const radioButton = menuItem.firstChild;
    radioButton.checked = true; // make sure radio button is also checked when menu item is clicked
    updateColorName(color);
    toggleColor(color);
  });
});

// update radio button selected when setting color using keybord keys - (Double Bonus requirement ;-))
const updateRadioButton = (color) => {
  selectedRadioButton = document.querySelector(`input[name='selected-color'][value=${color}]`);
  selectedRadioButton.checked = true;
};

// set color using keybord keys 1-5 - (Bonus requirement)
document.addEventListener("keydown", (event) => {
  if (event.key == 1) {
    const color = "grey";
    updateColorName(color);
    updateRadioButton(color);
    body.className = color;
  }
  if (event.key == 2) {
    const color = "red";
    updateColorName(color);
    updateRadioButton(color);
    body.className = color;
  }
  if (event.key == 3) {
    const color = "orange";
    updateColorName(color);
    updateRadioButton(color);
    body.className = color;
  }
  if (event.key == 4) {
    const color = "purple";
    updateColorName(color);
    updateRadioButton(color);
    body.className = color;
  }
  if (event.key == 5) {
    const color = "green";
    updateColorName(color);
    updateRadioButton(color);
    body.className = color;
  }
});
