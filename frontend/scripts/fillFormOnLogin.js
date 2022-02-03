if (localStorage.userProfile) {
  let storedResumeDetails = JSON.parse(localStorage.userProfile);
  let {
    fname,
    lname,
    profession,
    city,
    state,
    zipCode,
    phone,
    email,
    maritalStatus,
    gender,
    dob,
    hobby1,
    hobby2,
    certifications,
    education,
    experience,
    internships,
    projects,
  } = storedResumeDetails;

  console.log(storedResumeDetails);

  let basicDetailsInputs = $(".basicDetails");
  basicDetailsInputs[0].value = fname;
  basicDetailsInputs[1].value = lname;
  basicDetailsInputs[2].value = profession;
  basicDetailsInputs[3].value = city;
  basicDetailsInputs[4].value = state;
  basicDetailsInputs[5].value = zipCode;
  basicDetailsInputs[6].value = phone;
  basicDetailsInputs[7].value = email;

  for (let i = 0; i < education.length; i++) {
    $("#institute").val(education[i].university);
    $("#university").val(education[i].university);
    $("#degree").val(education[i].degree);
    $("#startYear").val(education[i].startYear);
    $("#endYear").val(education[i].endYear);
    $("#percentage").val(education[i].percentage);
    $(".btn")[0].click();
  }

  for (let i = 0; i < experience.length; i++) {
    let expDetailsInputs = $(".expValue");
    expDetailsInputs[0].value = experience[i].organisation;
    expDetailsInputs[1].value = experience[i].jobProfile;
    expDetailsInputs[2].value = experience[i].skills;
    expDetailsInputs[3].value = experience[i].startDate;
    expDetailsInputs[4].value = experience[i].endDate;
    expDetailsInputs[5].value = experience[i].jobProfile;
    $(".btn")[1].click();
  }

  //   let internshipDetailsInputs = $(".internshipsValue");
  //   for (let i = 0; i < internshipDetailsInputs.length; i++) {
  //     internshipDetailsInputs[0].value = internships[i].organisation;
  //     internshipDetailsInputs[1].value = internships[i].role;
  //     internshipDetailsInputs[2].value = internships[i].skills;
  //     internshipDetailsInputs[3].value = internships[i].startDate;
  //     internshipDetailsInputs[4].value = internships[i].endDate;
  //     internshipDetailsInputs[5].value = internships[i].role;
  //     $(".btn")[2].click();
  //   }

  let projectDetailsInputs = $(".projectValue");
  for (let i = 0; i < projectDetailsInputs.length; i++) {
    projectDetailsInputs[0].value = projects[i].projectTitle;
    projectDetailsInputs[1].value = projects[i].technologies;
    projectDetailsInputs[2].value = projects[i].projectDescription;
    $(".btn")[3].click();
  }

  let certDetailsInputs = $(".certValue");
  for (let i = 0; i < certDetailsInputs.length; i++) {
    certDetailsInputs[0].value = certifications[i].certName;
    certDetailsInputs[1].value = certifications[i].certOrganisation;
    certDetailsInputs[2].value = certifications[i].validTill;
    certDetailsInputs[3].value = certifications[i].certDescription;
    $(".btn")[4].click();
  }

  let personalDetailsInputs = $(".personalDetails");
  personalDetailsInputs[0].value = gender;
  personalDetailsInputs[1].value = maritalStatus;
  personalDetailsInputs[2].value = `${city} , ${state} , pin code : ${zipCode}`;
  personalDetailsInputs[3].value = hobby1;
  personalDetailsInputs[4].value = hobby2;
  personalDetailsInputs[5].value = dob;
}
