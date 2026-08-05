// Array
const faultCategories = [
    "Electrical",
    "Plumbing",
    "Furniture",
    "Internet",
    "Cleaning",
    "Other"
];

// object 
const system = {
    name: "Campus Maintenance Fault Reporting System",
    version: "1.0"
};

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const studentid = document.getElementById("studentid");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const building = document.getElementById("building");
const category = document.getElementById("category");
const date = document.getElementById("date");
const description = document.getElementById("description");

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
    input.style.border = "2px solid red";
    input.title = message;
}

function clearErrors() {
    document.querySelectorAll("input, select, textarea").forEach(field => {
        field.style.border = "";
        field.title = "";
    });
}

// Count characters in the description
description.addEventListener("input", function () {
    console.log("Characters entered: " + description.value.length);
});

// Display selected category
category.addEventListener("change", function () {
    console.log("Selected Category: " + category.value);
});

// Highlight the description box when the user clicks on it
description.addEventListener("focus", function () {
    description.style.backgroundColor = "#f0f8ff";
});

// Return the description box to its normal color
description.addEventListener("blur", function () {
    description.style.backgroundColor = "";
});
// Form Validation
form.addEventListener("submit", function (event) {

    clearErrors();

    let valid = true;

    if (fullname.value.trim() === "") {
        showError(fullname, "Full Name is required");
        valid = false;
    }

    if (studentid.value.trim() === "") {
        showError(studentid, "Student ID is required");
        valid = false;
    }

    if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email");
        valid = false;
    }

    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required");
        valid = false;
    }

    if (building.value === "") {
        showError(building, "Select a building");
        valid = false;
    }

    if (category.value === "") {
        showError(category, "Select a category");
        valid = false;
    }

    if (description.value.trim().length < 10) {
        showError(description, "Description must be at least 10 characters");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }

});
