//checking if user is logged in or not
if (window.localStorage.token) {
  let loginNav = document.getElementsByClassName("loginNav");
  for (let i = 0; i < loginNav.length; i++) {
    let username = localStorage.email.split("@");
    loginNav[i].innerText = username[0];
    loginNav[i].setAttribute("href", "../core/form.html");

    let userAvatar = document.getElementsByClassName("userAvatar");
    for (let i = 0; i < userAvatar.length; i++) {
      userAvatar[i].style.display = "inline-block";
    }
  }

  let logoutNav = document.getElementsByClassName("logoutNav");
  for (let i = 0; i < logoutNav.length; i++) {
    logoutNav[i].style.display = "inline-block";
  }
}

//logout
let logoutNav = document.getElementsByClassName("logoutNav");
for (let i = 0; i < logoutNav.length; i++) {
  logoutNav[i].onclick = function () {
    localStorage.clear();
    window.location.reload();
  };
}

//for storing all the degrees as an array of objects
let basicDetails = {};

function fetchBasicDetails() {
  // getting all the filled details and storing it into a temp array
  let basicDetailsInputs = $(".basicDetails");

  for (let i = 0; i < basicDetailsInputs.length; i++) {
    basicDetails[basicDetailsInputs[i].name] = basicDetailsInputs[i].value;
  }

  //validation before dynamic div creation
  if (
    !basicDetails.firstName ||
    !basicDetails.profession ||
    !basicDetails.city ||
    !basicDetails.state ||
    !basicDetails.zipCode ||
    !basicDetails.phoneNumber ||
    !basicDetails.email
  ) {
    // alert("You are missing few fields in education details!");
    confirm("You are missing few fields in education details!");
    return;
  }

  console.log("Basic Details", basicDetails);
}

//for storing all the degrees as an array of objects
let educationDetails = [];

function printEducationDetails(event) {
  // removing default property of form to prevent page refresh
  event.preventDefault();

  // getting all the filled details and storing it into a temp array
  var data = $(".eduValue");
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(data[i].value);
  }

  // arrya destructuring to store details in separeate variable
  let [institute, university, degree, startYear, endYear, percentage] = arr;

  //validation before dynamic div creation
  if (
    !institute ||
    !university ||
    !degree ||
    !startYear ||
    !endYear ||
    !percentage
  ) {
    // alert("You are missing few field/s in education details!");
    confirm("You are missing few fields in education details!");
    return;
  }

  //creating a div to show demo of filled details to user
  let id = Math.random().toString(36).substring(7); //random id

  // setting a ID for each div
  var eduDiv = $("<div>", { id: id });

  // creating a div inside  eduDemoContainer
  $("#eduDemoContainer").append(eduDiv);

  // applying css on newly created div with random id
  $(`#${id}`).css({
    "background-color": "#207398",
    color: "#fff",
    "min-height": "100px",
    width: "100%",
    "margin-top": "20px",
    padding: "3px",
    "box-shadow": "5px 5px 10px #a1a1a1",
    "border-radius": "5px",
  });

  // appending educational details in  newly created div with random id
  $(`#${id}`).append(
    `<span> <b> ${institute} </b> &nbsp; &nbsp; |  ${startYear}-${endYear} </span>`
  );
  $(`#${id}`).append(
    `<br> <hr> <span> ${university} &nbsp; | &nbsp; ${degree}  &nbsp; | &nbsp; ${percentage}% </span>`
  );

  //pushing degree in education array
  educationDetails.push({
    institute,
    university,
    degree,
    startYear,
    endYear,
    percentage,
  });

  console.log("Education details ", educationDetails);

  // clearing form to fill details again
  for (let i = 0; i < data.length; i++) {
    data[i].value = "";
  }
}

//for storing all the degrees as an array of objects
let experienceDetails = [];

function printExperienceDetails(event) {
  // removing default property of form to prevent page refresh
  event.preventDefault();

  // getting all the filled details and storing it into a temp array
  var experienceData = $(".expValue");
  let expArr = [];
  for (let i = 0; i < experienceData.length; i++) {
    expArr.push(experienceData[i].value);
  }

  // arrya destructuring to store details in separeate variable
  let [organisation, jobProfile, skills, startDate, endDate, jobDescription] =
    expArr;

  //validation before dynamic div creation
  if (
    !organisation ||
    !jobProfile ||
    !skills ||
    !startDate ||
    !endDate ||
    !jobDescription
  ) {
    // alert("You are missing few fields in professional experience details!");
    confirm("You are missing few fields in professional experience details!");
    return;
  }

  //creating a div to show demo of filled details to user
  let id = Math.random().toString(36).substring(7); //random id

  // setting a ID for each div
  var expDiv = $("<div>", { id: id });

  // creating a div inside  eduDemoContainer
  $("#experienceDemoContainer").append(expDiv);

  // applying css on newly created div with random id
  $(`#${id}`).css({
    "background-color": "#207398",
    color: "#fff",
    "min-height": "100px",
    width: "100%",
    "margin-top": "20px",
    padding: "3px",
    "box-shadow": "5px 5px 10px #a1a1a1",
    "border-radius": "5px",
  });

  // appending educational details in  newly created div with random id
  $(`#${id}`).append(
    `<span> <b> ${organisation} </b> &nbsp; &nbsp; |  ${startDate} to ${endDate} </span>`
  );
  $(`#${id}`).append(
    `<br> <hr> <span> <i> ${jobProfile} </i> </br><hr> <b>Skills : </b>  ${skills}  </br><hr> ${jobDescription} </span>`
  );

  //pushing degree in education array
  experienceDetails.push({
    organisation,
    jobProfile,
    skills,
    startDate,
    endDate,
    jobDescription,
  });

  console.log("Experience Details", experienceDetails);

  // clearing form to fill details again
  for (let i = 0; i < experienceData.length; i++) {
    experienceData[i].value = "";
  }
}

//for storing all the degrees as an array of objects
let internshipDetails = [];

function printInternshipDetails(event) {
  // removing default property of form to prevent page refresh
  event.preventDefault();

  // getting all the filled details and storing it into a temp array
  var internshipData = $(".internshipsValue");
  let internArr = [];
  for (let i = 0; i < internshipData.length; i++) {
    internArr.push(internshipData[i].value);
  }

  // arrya destructuring to store details in separeate variable
  let [organisation, role, skills, startDate, endDate, jobDescription] =
    internArr;

  //validation before dynamic div creation
  if (
    !organisation ||
    !role ||
    !skills ||
    !startDate ||
    !endDate ||
    !jobDescription
  ) {
    // alert("You are missing few fields in internship details!");
    confirm("You are missing few fields in internship details!");
    return;
  }

  //creating a div to show demo of filled details to user
  let id = Math.random().toString(36).substring(7); //random id

  // setting a ID for each div
  var internDiv = $("<div>", { id: id });

  // creating a div inside  eduDemoContainer
  $("#internshipDemoContainer").append(internDiv);

  // applying css on newly created div with random id
  $(`#${id}`).css({
    "background-color": "#207398",
    color: "#fff",
    "min-height": "100px",
    width: "100%",
    "margin-top": "20px",
    padding: "3px",
    "box-shadow": "5px 5px 10px #a1a1a1",
    "border-radius": "5px",
  });

  // appending educational details in  newly created div with random id
  $(`#${id}`).append(
    `<span> <b> ${organisation} </b> &nbsp; &nbsp; |  ${startDate} to ${endDate} </span>`
  );
  $(`#${id}`).append(
    `<br> <hr> <span> <i> ${role} </i> </br><hr> <b>Skills : </b>  ${skills}  </br><hr> ${jobDescription} </span>`
  );

  //pushing degree in education array
  internshipDetails.push({
    organisation,
    role,
    skills,
    startDate,
    endDate,
    jobDescription,
  });

  console.log("Internship Details", internshipDetails);

  // clearing form to fill details again
  for (let i = 0; i < internshipData.length; i++) {
    internshipData[i].value = "";
  }
}

let projectDetails = [];

function printProjectDetails(event) {
  // removing default property of form to prevent page refresh
  event.preventDefault();

  // getting all the filled details and storing it into a temp array
  var projectData = $(".projectValue");
  let projectArr = [];
  for (let i = 0; i < projectData.length; i++) {
    projectArr.push(projectData[i].value);
  }

  // arrya destructuring to store details in separeate variable
  let [projectTitle, technologies, projectDescription] = projectArr;

  //validation before dynamic div creation
  if (!projectTitle || !technologies || !projectDescription) {
    // alert("You are missing few fields in project details!");
    confirm("You are missing few fields in project details!");
    return;
  }

  //creating a div to show demo of filled details to user
  let id = Math.random().toString(36).substring(7); //random id

  // setting a ID for each div
  var projectDiv = $("<div>", { id: id });

  // creating a div inside  eduDemoContainer
  $("#projectDemoContainer").append(projectDiv);

  // applying css on newly created div with random id
  $(`#${id}`).css({
    "background-color": "#207398",
    color: "#fff",
    "min-height": "100px",
    width: "100%",
    "margin-top": "20px",
    padding: "3px",
    "box-shadow": "5px 5px 10px #a1a1a1",
    "border-radius": "5px",
  });

  // appending educational details in  newly created div with random id
  $(`#${id}`).append(`<span> <b> ${projectTitle} </b> </span>`);
  $(`#${id}`).append(
    `<br> <hr> <span> <i> ${projectDescription} </i> <br> <hr> <b>Technologies : </b>  ${technologies} </span>`
  );

  projectDetails.push({
    projectTitle,
    technologies,
    projectDescription,
  });
  console.log("projectDetails", projectDetails);

  // clearing form to fill details again
  for (let i = 0; i < projectData.length; i++) {
    projectData[i].value = "";
  }
}

let certificateDetails = [];

function printCertificateDetails(event) {
  // removing default property of form to prevent page refresh
  event.preventDefault();

  // getting all the filled details and storing it into a temp array
  var certData = $(".certValue");
  let certArr = [];
  for (let i = 0; i < certData.length; i++) {
    certArr.push(certData[i].value);
  }

  // arrya destructuring to store details in separeate variable
  let [certName, certOrganisation, validTill, certDescription] = certArr;

  //validation before dynamic div creation
  if (!certName || !certOrganisation || !validTill || !certDescription) {
    // alert("You are missing few fields in certification details!");
    confirm("You are missing few fields in certification details!");
    return;
  }

  //creating a div to show demo of filled details to user
  let id = Math.random().toString(36).substring(7); //random id

  // setting a ID for each div
  var certDiv = $("<div>", { id: id });

  // creating a div inside  eduDemoContainer
  $("#certificationDemoContainer").append(certDiv);

  // applying css on newly created div with random id
  $(`#${id}`).css({
    "background-color": "#207398",
    color: "#fff",
    "min-height": "100px",
    width: "100%",
    "margin-top": "20px",
    padding: "3px",
    "box-shadow": "5px 5px 10px #a1a1a1",
    "border-radius": "5px",
  });

  // appending educational details in  newly created div with random id
  $(`#${id}`).append(
    `<span> <b> ${certName} </b> &nbsp; &nbsp;   valid till: ${validTill} </span>`
  );
  $(`#${id}`).append(
    `<br> <span> <i> ${certOrganisation} </i> </br> <hr> <b>Skills : </b>  ${certDescription}  </span>`
  );

  certificateDetails.push({
    certName,
    certOrganisation,
    validTill,
    certDescription,
  });

  console.log("certificationDetails", certificateDetails);
  // clearing form to fill details again
  for (let i = 0; i < certData.length; i++) {
    certData[i].value = "";
  }
}

//for storing all the degrees as an array of objects
let personalDetails = {};

function fetchPersonalDetails() {
  // getting all the filled details and storing it into a temp array
  let personalDetailsInputs = $(".personalDetails");

  for (let i = 0; i < personalDetailsInputs.length; i++) {
    personalDetails[personalDetailsInputs[i].name] =
      personalDetailsInputs[i].value;
  }

  //validation before dynamic div creation
  if (
    !personalDetails.gender ||
    !personalDetails.maritalStatus ||
    !personalDetails.fullAddress ||
    !personalDetails.dob
  ) {
    // alert("You are missing few fields in personal details!");
    confirm("You are missing few fields in personal details!");
    return;
  }

  console.log("personal Details", personalDetails);
}

//extract data from fields where user can have multiple values(eg- education,certification,projects,etc.)
function fetchUnsavedData(event) {
  event.preventDefault();

  //getting first value of all fields to check whether data is extracted or not
  // because if data is already extracted then the value of that field will be set to blank string

  let eduInstituteName = $(".eduValue")[0].value;
  let expOrgName = $(".expValue")[0].value;
  let interOrgName = $(".internshipsValue")[0].value;
  let projectName = $(".projectValue");
  [0].value;
  let certName = $(".certValue")[0].value;

  if (eduInstituteName) {
    printEducationDetails(event);
  }

  if (expOrgName) {
    printExperienceDetails(event);
  }

  if (interOrgName) {
    printInternshipDetails(event);
  }

  if (projectName) {
    printProjectDetails(event);
  }

  if (certName) {
    printCertificateDetails(event);
  }
}

let resumeDetails = {};
function combineAllDetails() {
  resumeDetails.basic = basicDetails;
  resumeDetails.personal = personalDetails;
  resumeDetails.education = educationDetails;
  resumeDetails.experience = experienceDetails;
  resumeDetails.internship = internshipDetails;
  resumeDetails.project = projectDetails;
  resumeDetails.certification = certificateDetails;

  //for identifying logged in user
  if (localStorage.email) {
    resumeDetails.regEmail = localStorage.email;
  }
  console.log("#########  FINAL OBJECT ##########", resumeDetails);
}
