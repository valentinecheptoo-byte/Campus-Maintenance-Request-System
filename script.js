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