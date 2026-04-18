// Subtask 4.1: Access DOM Elements
const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const selectBox = document.getElementById("selectBox");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

// Subtask 4.2: Click Event
clickBtn.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});

// Subtask 4.3: Input & Change Events
textInput.addEventListener("input", () => {
    output.textContent = "Typing: " + textInput.value;
});

selectBox.addEventListener("change", () => {
    output.textContent = "Selected: " + selectBox.value;
});

// Subtask 4.4: Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.textContent = "Form submitted: " + nameInput.value;
});

// Subtask 4.5: Keyup Event
textInput.addEventListener("keyup", (e) => {
    output.textContent = "Last key: " + e.key;
});

// Subtask 4.6: Mouse Events
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.background = "lightblue";
    output.textContent = "Mouse entered box";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.background = "lightgray";
    output.textContent = "Mouse left box";
});

// Subtask 4.7: Focus & Blur Events
textInput.addEventListener("focus", () => {
    textInput.style.background = "#e0f7fa";
});

textInput.addEventListener("blur", () => {
    textInput.style.background = "white";
});