// Function to add new Education field
function addNewEduField() {
  const eduFields: any = document.getElementById("edu-fields");

  const newField = document.createElement("textarea");
  newField.placeholder = "Type here";
  newField.className = "form-control";
  newField.rows = 3;
  eduFields.appendChild(newField);
}

// Function to add new Experience field
function addNewExpField() {
  const expFields: any = document.getElementById("exp-fields");

  const newField = document.createElement("textarea");
  newField.placeholder = "Type here";
  newField.className = "form-control";
  newField.rows = 3;
  expFields.appendChild(newField);
}

// Function to add new Skill field
function addNewSkillField() {
  const skilsFields: any = document.getElementById("skils-fields");

  const newField = document.createElement("textarea");
  newField.placeholder = "Type here";
  newField.className = "form-control";
  newField.rows = 3;
  skilsFields.appendChild(newField);
}

function generateResume() {
	const name = (document.getElementById("namefield") as HTMLInputElement).value;

	const lastname = (document.getElementById("lastnamefield") as HTMLInputElement).value;
	
	const email = (document.getElementById("Emailfield") as HTMLInputElement).value;
	
	const phone = (document.getElementById("contactfield") as HTMLInputElement).value;

  const address = (document.getElementById("Addressfield") as HTMLTextAreaElement).value;

  const facebook = (document.getElementById("fbfield") as HTMLInputElement).value;

  const instagram = (document.getElementById("instafield") as HTMLInputElement).value;

  const linkedin = (document.getElementById("linkdinfeild") as HTMLInputElement).value;

  const github = (document.getElementById("githubfield") as HTMLInputElement).value;

  // Collect all dynamically added education fields
  const eduFields = document.querySelectorAll("#edu-fields textarea");

  let educationList = "";

  eduFields.forEach((field) => {
    educationList += `<li>${(field as HTMLTextAreaElement).value} </li>`;
  });

  // Collect all dynamically added experience fields
  const expFields = document.querySelectorAll("#exp-fields textarea");

  let experienceList = "";

  expFields.forEach((field) => {
    experienceList += `<p>${(field as HTMLTextAreaElement).value} </p>`;
  });

  // Collect all dynamically added skills fields
  const skillFields = document.querySelectorAll("#skils-fields textarea");

  let skillsList = "";

  skillFields.forEach((field) => {
    skillsList += `<li>${(field as HTMLTextAreaElement).value} </li>`;
  });

  // Update the resume template with collected data
  (document.getElementById("firstnametemp") as HTMLElement).innerText = name;

  (document.getElementById("lastnametemp") as HTMLElement).innerText = lastname;

  (document.getElementById("emailtemp") as HTMLElement).innerText = email;

  (document.getElementById("phonetemp") as HTMLElement).innerText = phone;

  (document.getElementById("Addresstemp") as HTMLElement).innerText = address;

  (document.getElementById("fbtemp") as HTMLAnchorElement).href = facebook;

  (document.getElementById("instatemp") as HTMLAnchorElement).href = instagram;

  (document.getElementById("linkdintemp") as HTMLAnchorElement).href = linkedin;

  (document.getElementById("githubtemp") as HTMLAnchorElement).href = github;

  // Update education, experience, and skills in the template
  (document.getElementById("edutemp") as HTMLElement).innerHTML = educationList;

  (document.getElementById("exptemp") as HTMLElement).innerHTML = experienceList;

  (document.getElementById("skiltemp") as HTMLElement).innerHTML = skillsList;

  // Show resume template
  (document.getElementById("Templet-generate") as HTMLElement).style.display = "block";

  (document.getElementById("RESUME-GENERATE") as HTMLElement).style.display = "none";
}

function printResume() {
  window.print();
}

function shareResumeBtn() {
  const resumeLink = window.location.href;

  if (navigator.share) {
    navigator
      .share({
        title: "My Resume",
        text: "Check out my resume!",
        url: resumeLink,
      })
      .then(() => console.log("Resume link shared successfully!"))
      .catch((error) => console.log("Error sharing the link:", error));
  } else {
    alert("Sharing not supported in this browser.");
  }
}

document.getElementById("shareResumeBtn")?.addEventListener("click", shareResumeBtn);
