// Function to add new Education field
// function addNewEduField() {
//   const eduFields: any = document.getElementById("edu-fields");
var _a;
//   const newField = document.createElement("textarea");
//   newField.placeholder = "Type here";
//   newField.className = "form-control";
//   eduFields.appendChild(newField);
// }
function addNewEduField() {
    var eduFields = document.getElementById("edu-fields");
    // Create a new div to hold both the textarea and the remove button
    var fieldWrapper = document.createElement("div");
    fieldWrapper.className = "edu-field-wrapper";
    // Create a new textarea
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    // Create a remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "remove-btn";
    // Add event listener to the remove button to remove the textarea
    removeButton.addEventListener("click", function () {
        eduFields.removeChild(fieldWrapper); // Remove the whole wrapper (textarea + button)
    });
    // Append the textarea and remove button to the fieldWrapper
    fieldWrapper.appendChild(newField);
    fieldWrapper.appendChild(removeButton);
    // Append the fieldWrapper to the edu-fields container
    eduFields.appendChild(fieldWrapper);
}
// Function to add new Experience field
// function addNewExpField() {
//   const expFields: any = document.getElementById("exp-fields");
//   const newField = document.createElement("textarea");
//   newField.placeholder = "Type here";
//   newField.className = "form-control";
//   expFields.appendChild(newField);
// }
function addNewExpField() {
    var eduFields = document.getElementById("exp-fields");
    // Create a new div to hold both the textarea and the remove button
    var fieldWrapper = document.createElement("div");
    fieldWrapper.className = "exp-field-wrapper";
    // Create a new textarea
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    // Create a remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "remove-btn";
    // Add event listener to the remove button to remove the textarea
    removeButton.addEventListener("click", function () {
        eduFields.removeChild(fieldWrapper); // Remove the whole wrapper (textarea + button)
    });
    // Append the textarea and remove button to the fieldWrapper
    fieldWrapper.appendChild(newField);
    fieldWrapper.appendChild(removeButton);
    // Append the fieldWrapper to the edu-fields container
    eduFields.appendChild(fieldWrapper);
}
// Function to add new Skill field
// function addNewSkillField() {
//   const skilsFields: any = document.getElementById("skils-fields");
//   const newField = document.createElement("textarea");
//   newField.placeholder = "Type here";
//   newField.className = "form-control";
//   skilsFields.appendChild(newField);
// }
function addNewSkillField() {
    var eduFields = document.getElementById("skils-fields");
    // Create a new div to hold both the textarea and the remove button
    var fieldWrapper = document.createElement("div");
    fieldWrapper.className = "skils-field-wrapper";
    // Create a new textarea
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    // Create a remove button
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "remove-btn";
    // Add event listener to the remove button to remove the textarea
    removeButton.addEventListener("click", function () {
        eduFields.removeChild(fieldWrapper); // Remove the whole wrapper (textarea + button)
    });
    // Append the textarea and remove button to the fieldWrapper
    fieldWrapper.appendChild(newField);
    fieldWrapper.appendChild(removeButton);
    // Append the fieldWrapper to the edu-fields container
    eduFields.appendChild(fieldWrapper);
}
function generateResume() {
    var name = document.getElementById("namefield").value;
    var lastname = document.getElementById("lastnamefield").value;
    var email = document.getElementById("Emailfield").value;
    var phone = document.getElementById("contactfield").value;
    var address = document.getElementById("Addressfield").value;
    var facebook = document.getElementById("fbfield").value;
    var instagram = document.getElementById("instafield").value;
    var linkedin = document.getElementById("linkdinfeild").value;
    var github = document.getElementById("githubfield").value;
    // Collect all dynamically added education , skills, experience fields
    var eduFields = document.querySelectorAll("#edu-fields textarea");
    var educationList = "";
    eduFields.forEach(function (field) {
        educationList += "<li>".concat(field.value, " </li>");
    });
    var expFields = document.querySelectorAll("#exp-fields textarea");
    var experienceList = "";
    expFields.forEach(function (field) {
        experienceList += "<p>".concat(field.value, " </p>");
    });
    var skillFields = document.querySelectorAll("#skils-fields textarea");
    var skillsList = "";
    skillFields.forEach(function (field) {
        skillsList += "<li>".concat(field.value, " </li>");
    });
    // Update the resume template with collected data
    document.getElementById("firstnametemp").innerText = name;
    document.getElementById("lastnametemp").innerText = lastname;
    document.getElementById("emailtemp").innerText = email;
    document.getElementById("phonetemp").innerText = phone;
    document.getElementById("Addresstemp").innerText = address;
    document.getElementById("fbtemp").href = facebook;
    document.getElementById("instatemp").href = instagram;
    document.getElementById("linkdintemp").href = linkedin;
    document.getElementById("githubtemp").href = github;
    // Update education, experience, and skills in the template
    document.getElementById("edutemp").innerHTML = educationList;
    document.getElementById("exptemp").innerHTML = experienceList;
    document.getElementById("skiltemp").innerHTML = skillsList;
    // Show resume template
    document.getElementById("Templet-generate").style.display = "block";
    document.getElementById("RESUME-GENERATE").style.display = "none";
}
function printResume() {
    window.print();
}
// function shareResumeBtn() {
//   const resumeLink = window.location.href;
//   if (navigator.share) {
//     navigator
//       .share({
//         title: "My Resume",
//         text: "Check out my resume!",
//         url: resumeLink,
//       })
//       .then(() => console.log("Resume link shared successfully!"))
//       .catch((error) => console.log("Error sharing the link:", error));
//   } else {
//     alert("Sharing not supported in this browser.");
//   }
// }
// document.getElementById("shareResumeBtn")?.addEventListener("click", shareResumeBtn);
function shareResumeBtn() {
    //let resumeLink = window.location.href; // Use 'let' here instead of 'const'
    // Ensure the link has http or https
    // if (!resumeLink.startsWith("http://") && !resumeLink.startsWith("https://")) {
    //   resumeLink = `https://${resumeLink}`;
    // }
    var resumeLink = window.location.href; // Make sure this is a string
    if (resumeLink && typeof resumeLink === "string") {
        if (!resumeLink.startsWith("http://") &&
            !resumeLink.startsWith("https://")) {
            resumeLink = "https://".concat(resumeLink);
        }
    }
    else {
        console.error("Invalid resume link!");
    }
    if (navigator.share) {
        navigator
            .share({
            title: "My Resume",
            text: "Check out my resume: ".concat(resumeLink),
            url: resumeLink,
        })
            .then(function () { return console.log("Resume link shared successfully!"); })
            .catch(function (error) { return console.log("Error sharing the link:", error); });
    }
    else {
        // Fallback: Copy the link to clipboard
        navigator.clipboard
            .writeText(resumeLink)
            .then(function () {
            alert("Resume link copied to clipboard. Paste it to share!");
        })
            .catch(function (error) {
            console.log("Error copying link:", error);
        });
    }
}
(_a = document
    .getElementById("shareResumeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", shareResumeBtn);
