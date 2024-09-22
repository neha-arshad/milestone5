var _a;
// Function to add new Education field
function addNewEduField() {
    var eduFields = document.getElementById("edu-fields");
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    eduFields.appendChild(newField);
}
// Function to add new Experience field
function addNewExpField() {
    var expFields = document.getElementById("exp-fields");
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    expFields.appendChild(newField);
}
// Function to add new Skill field
function addNewSkillField() {
    var skilsFields = document.getElementById("skils-fields");
    var newField = document.createElement("textarea");
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    skilsFields.appendChild(newField);
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
    // Collect all dynamically added education fields
    var eduFields = document.querySelectorAll("#edu-fields textarea");
    var educationList = "";
    eduFields.forEach(function (field) {
        educationList += "<li>".concat(field.value, " </li>");
    });
    // Collect all dynamically added experience fields
    var expFields = document.querySelectorAll("#exp-fields textarea");
    var experienceList = "";
    expFields.forEach(function (field) {
        experienceList += "<p>".concat(field.value, " </p>");
    });
    // Collect all dynamically added skills fields
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
function shareResumeBtn() {
    var resumeLink = window.location.href;
    if (navigator.share) {
        navigator
            .share({
            title: "My Resume",
            text: "Check out my resume!",
            url: resumeLink,
        })
            .then(function () { return console.log("Resume link shared successfully!"); })
            .catch(function (error) { return console.log("Error sharing the link:", error); });
    }
    else {
        alert("Sharing not supported in this browser.");
    }
}
(_a = document.getElementById("shareResumeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", shareResumeBtn);
