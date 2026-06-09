// Part 1: Basic Conditional Logic
let age = 15;

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Not an Adult")
};

// Part 2: DOM and LocalStorage Logic
document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById("userForm"); 
    const nameInput = document.getElementById("userName"); 
    const ageInput = document.getElementById("userAge"); 

    // 1. Load data from localStorage if it exists
    const savedData = localStorage.getItem("userData"); 

    if (savedData) { 
        //2. Parse string back to object 
        const user = JSON.parse(savedData); 
        
        nameInput.value = user.name; 
        ageInput.value = user.age; 

        // 3. Create greeting using backticks (`) and ${}
        console.log(`Hello, ${user.name}! Welcome back.`); 
    } else { 
        console.log("Hello, Guest! Welcome."); 
    } 

    // 4. Convert object to string and save ONLY when the form submits
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop page reload
            
            const userData = {
                name: nameInput.value,
                age: ageInput.value
            };
            
            localStorage.setItem("userData", JSON.stringify(userData));
            console.log("Data saved successfully!");
        });
    }
});

 //  Convert object to string

function calculateAgeInMonths(birthDateString) {
    // Convert input string to Date object
    const birthDate = new Date(birthDateString);
    const today = new Date();
    
    // Check if the input date is in the future
    if (birthDate > today) {
        return null; 
    }

    // Calculate initial total months difference
    const yearsDifference = today.getFullYear() - birthDate.getFullYear();
    const monthsDifference = today.getMonth() - birthDate.getMonth();
    
    let totalMonths = (yearsDifference * 12) + monthsDifference;

    // Adjust if the birth day of the month hasn't occurred yet in the current month
    if (today.getDate() < birthDate.getDate()) {
        totalMonths--;
    }

    return totalMonths;
}

function displayAgeInMonths() {
    // Get the value from the HTML input element
    const inputDate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    // Guard clause for empty input
    if (!inputDate) {
        resultElement.innerText = "Please select a valid date.";
        return;
    }

    const ageInMonths = calculateAgeInMonths(inputDate);

    // Render response safely based on calculation results
    if (ageInMonths === null) {
        resultElement.innerText = "Birthdate cannot be in the future!";
    } else {
        resultElement.innerText = `You are ${ageInMonths} months old.`;
    }
}

const quote = "Truth lifts the heart like water refreshes thirst.. - Opeyemi Farayola";
let displayHTML = "";

// Loop 5 times
for (let i = 0; i < 5; i++) {
    displayHTML += `<p>${quote}</p>`;
}

// Display on the page
document.getElementById("quote-container").innerHTML = displayHTML;