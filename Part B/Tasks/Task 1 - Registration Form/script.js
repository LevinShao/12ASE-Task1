// Get references to all input fields and error message spans
const fields = {
    name: document.getElementById("userName"),
    email: document.getElementById("userEmail"),
    dob: document.getElementById("userDOB"),
    pass: document.getElementById("userPassword")
};

// Error message spans
const errors = {
    name: document.getElementById("errName"),
    email: document.getElementById("errEmail"),
    dob: document.getElementById("errDOB"),
    pass: document.getElementById("errPassword")
};

const submitBtn = document.getElementById("userSubmit"); // Submit button

// Toggle password visibility
// When the toggle button is clicked, change the password field type from "password" to "text" and vice versa
document.getElementById("togglePassword").onclick = () => {
    fields.pass.type = fields.pass.type === "password" ? "text" : "password";
};

// Validation function
function validate() {
    let valid = true; // Assume valid until a check fails

    // Validate Name
    if (fields.name.value.trim() === "") {
        errors.name.textContent = "Name cannot be empty.";
        fields.name.classList.add("invalid"); // Indicate invalid input, therefore activate red border and error message
        valid = false;
    } else {
        errors.name.textContent = "";
        fields.name.classList.remove("invalid"); // Remove invalid indication if input is valid
    }

    // Validate Email
    // The email must have an "@" symbol and a domain for it to pass validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex. If the email doesn't match this pattern, it's invalid
    if (!emailRegex.test(fields.email.value.trim())) {
        errors.email.textContent = "Invalid email format.";
        fields.email.classList.add("invalid"); // Indicate invalid input, therefore activate red border and error message
        valid = false;
    } else {
        errors.email.textContent = "";
        fields.email.classList.remove("invalid"); // Remove invalid indication if input is valid
    }

    // Validate DOB (cannot be empty or in the future)
    // This was complicated so one of my friends helped me a tiny bit with this part
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (fields.dob.value === "") {
        errors.dob.textContent = "Date of birth is required."; // DOB cannot be empty
        fields.dob.classList.add("invalid"); // Indicate invalid input, therefore activate red border and error message
        valid = false;
    } else if (fields.dob.value > today) { // If the DOB value is greater than today's date, it's in the future
        errors.dob.textContent = "Date of birth cannot be in the future."; // therefore it's invalid
        fields.dob.classList.add("invalid"); // Indicate invalid input, therefore activate red border and error message
        valid = false;
    } else {
        errors.dob.textContent = "";
        fields.dob.classList.remove("invalid"); // Remove invalid indication if input is valid
    }

    // Validate Password (8+ chars, letters + numbers)
     // Regex for password: at least 8 characters, at least one letter and one number, no special characters
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passRegex.test(fields.pass.value)) { // If the password doesn't match this pattern, it's invalid
        errors.pass.textContent = "Password must be 8+ chars with letters & numbers.";
        fields.pass.classList.add("invalid"); // Indicate invalid input, therefore activate red border and error message
        valid = false;
    } else {
        errors.pass.textContent = "";
        fields.pass.classList.remove("invalid"); // Remove invalid indication if input is valid
    }

    submitBtn.disabled = !valid; // Enable submit button only if all fields are valid
}

// Apply validation on all input fields
Object.values(fields).forEach(field => {
    field.addEventListener("input", validate);
});

// Limit DOB year input to 4 digits
fields.dob.addEventListener("input", () => {
    const parts = fields.dob.value.split("-");
    if (parts[0] && parts[0].length > 4) {
        parts[0] = parts[0].slice(-4); // keep only the last 4 digits
        fields.dob.value = parts.join("-"); // reconstruct the date string
    }
});

// Context: Browsers like Chrome and Edge uses a default date-picker for DOB input fields
// that allows users to type 6 digits into the YEAR section even though it only accepts the first or last four digits depending on how the user typed it.
// This meant that users could type in invalid years like "123456" which would break the DOB validation.
// But the code would see the value as "1234" and think it's valid, so the error message and red border wouldn't even show up even though it's literally a 6-digit year.
// This indicates that this is a visual display issue associated with the browser instead of the HTML and CSS code itself.
// Therefore, to fix this, I added an event listener to the DOB input field that checks the year part of the date whenever the user types something.
// If the year part exceeds 4 digits, it truncates it to the last 4 digits only.

// Submit button click event
// On submit, store the data in localStorage and redirect to results.html, where the inputted data will be shown to the user.
submitBtn.onclick = () => {
    localStorage.setItem("regName", fields.name.value);
    localStorage.setItem("regEmail", fields.email.value);
    localStorage.setItem("regDOB", fields.dob.value);
    localStorage.setItem("regPassword", fields.pass.value);
    window.location.href = "results.html";
};