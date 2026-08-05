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