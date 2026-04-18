// Subtask 3.1: Import fs module
const fs = require("fs");

// Subtask 3.2: Define content
const content = "Hello! This file was created using Node.js.";

// Write file
fs.writeFile("message.txt", content, (err) => {
    if (err) {
        console.log("Error writing file:", err);
    } else {
        console.log("File created successfully!");
    }
});