
function validateInput(name, contact, email) {

    // Variable declaration
    let valid = true;

    // Conditional structure
    if (name.trim() === "") {
        alert("Please enter your full name.");
        valid = false;
    }

    // Validate contact number
    if (!/^[0-9]{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        valid = false;
    }

    // Validate email
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    return valid;
}

 

function calculatePriority(assistance, urgency) {

    // Variable declaration
    let score = 0;

    // Conditional structures
    if (assistance === "food") {
        score = score + 3;
    }
    else if (assistance === "homelessness") {
        score = score + 4;
    }
    else if (assistance === "employment") {
        score = score + 2;
    }
    else if (assistance === "skills") {
        score = score + 1;
    }
    else if (assistance === "clothing") {
        score = score + 2;
    }

    // Add points based on urgency
    if (urgency === "high") {
        score = score + 3;
    }
    else if (urgency === "medium") {
        score = score + 2;
    }
    else if (urgency === "low") {
        score = score + 1;
    }

    // Output
    return score;
}


function getSelectedNeeds() {

    // Get all selected checkboxes
    let checkboxes =
        document.querySelectorAll('input[name="need"]:checked');

    // Variable declaration
    let needs = [];

    // Iteration structure
    for (let i = 0; i < checkboxes.length; i++) {

        needs.push(checkboxes[i].value);
    }

    // Output
    return needs;
}



function displayResult(name, score, needs) {

    // Variable declaration
    let priority;

    // Conditional structure
    if (score >= 6) {
        priority = "HIGH PRIORITY";
    }
    else if (score >= 4) {
        priority = "MEDIUM PRIORITY";
    }
    else {
        priority = "LOW PRIORITY";
    }

    // Output to webpage
    document.getElementById("result").innerHTML =
        "<h3>Support Request Submitted</h3>" +
        "<p><strong>Applicant:</strong> " + name + "</p>" +
        "<p><strong>Priority Score:</strong> " + score + "</p>" +
        "<p><strong>Priority Level:</strong> " + priority + "</p>" +
        "<p><strong>Support Needed:</strong> " +
        needs.join(", ") + "</p>";

    // Message box / Alert
    alert(
        "Support request submitted successfully!\n\n" +
        "Applicant: " + name + "\n" +
        "Priority Level: " + priority
    );
}



function submitRequest(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // INPUT PROCESSING
    let name =
        document.getElementById("fullname").value;

    let contact =
        document.getElementById("contact").value;

    let email =
        document.getElementById("email").value;

    let assistance =
        document.getElementById("assistance").value;

    // Get selected radio button
    let urgencyButton =
        document.querySelector(
            'input[name="urgency"]:checked'
        );

    let urgency = "";

    if (urgencyButton !== null) {
        urgency = urgencyButton.value;
    }

    // Call Function 1
    let valid =
        validateInput(name, contact, email);

    // Stop if validation fails
    if (!valid) {
        return;
    }

    // Check assistance
    if (assistance === "") {
        alert("Please select the type of assistance required.");
        return;
    }

    // Check urgency
    if (urgency === "") {
        alert("Please select an urgency level.");
        return;
    }

    // Call Function 2
    let score =
        calculatePriority(assistance, urgency);

    // Call Function 3
    let needs =
        getSelectedNeeds();

    // Call Function 4
    displayResult(name, score, needs);
}


let supportForm =
    document.getElementById("supportForm");

if (supportForm) {

    supportForm.addEventListener(
        "submit",
        submitRequest
    );
}