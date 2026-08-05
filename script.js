// Array
const faultCategories = ["Electrical", "Plumbing", "Furniture", "Internet", "Cleaning", "Other"];

// Object
const system = {
    name: "Campus Maintenance Fault Reporting System",
    version: "1.0"
};

// DOM Elements
const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const studentid = document.getElementById("studentid");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const building = document.getElementById("building");
const category = document.getElementById("category");
const description = document.getElementById("description");

// Functions
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

function showError(input, message) {
    input.style.border = "2px solid red";
    input.title = message;
}

// DOM Interactions
description.addEventListener("input", () =>
    console.log("Characters:", description.value.length)
);

category.addEventListener("change", () =>
    console.log("Category:", category.value)
);

description.addEventListener("focus", () =>
    description.style.backgroundColor = "#f0f8ff"
);

description.addEventListener("blur", () =>
    description.style.backgroundColor = ""
);

// Form Validation
form.addEventListener("submit", function (event) {

    document.querySelectorAll("input, select, textarea").forEach(field => {
        field.style.border = "";
        field.title = "";
    });

    let valid = true;

    if (fullname.value.trim() === "") { showError(fullname, "Required"); valid = false; }
    if (studentid.value.trim() === "") { showError(studentid, "Required"); valid = false; }
    if (!validateEmail(email.value)) { showError(email, "Invalid Email"); valid = false; }
    if (phone.value.trim() === "") { showError(phone, "Required"); valid = false; }
    if (building.value === "") { showError(building, "Select Building"); valid = false; }
    if (category.value === "") { showError(category, "Select Category"); valid = false; }
    if (description.value.trim().length < 10) { showError(description, "Minimum 10 characters"); valid = false; }

    if (!valid) event.preventDefault();

});
