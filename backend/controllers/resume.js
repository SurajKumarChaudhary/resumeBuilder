const UserProfile = require("../models/userProfile");
const { isSignedIn } = require("./auth");

exports.home = (req, res) => {
  console.log("Cookies: ", req.signedCookies);
  res.json({ msg: "you are on root page" });
};

exports.generateResume = (req, res) => {
  let resumeDetails = JSON.parse(req.body.resumeDetails);
  let templateId = req.query.templateId;

  let temp = resumeDetails;

  //checking if detail is coming from logged in user or general user
  if (temp.regEmail) {
    let details = {
      regEmail: temp.regEmail,
      fname: temp.basic.firstName,
      lname: temp.basic.lastName,
      profession: temp.basic.profession,
      city: temp.basic.city,
      state: temp.basic.state,
      zipCode: temp.basic.zipCode,
      phone: temp.basic.phoneNumber,
      email: temp.basic.email,

      gender: temp.personal.gender,
      maritalStatus: temp.personal.maritalStatus,
      hobby1: temp.personal.hobby1,
      hobby2: temp.personal.hobby2,
      dob: temp.personal.dob,

      education: temp.education,

      experience: temp.experience,

      internships: temp.internship,

      projects: temp.project,

      certifications: temp.certification,
    };

    // console.log(details);
    UserProfile.findOneAndUpdate(
      { regEmail: temp.regEmail },
      details,
      {
        new: true,
        upsert: true,
      },
      (err, user) => {
        if (err) {
          return res.status(400).json({ err });
        }

        return res.render(templateId, resumeDetails);
      }
    );

    // ========================================
    // const userProfile = new UserProfile(details);
    // userProfile.save((err, user) => {
    //   if (err) {
    //     return res.status(401).json({ err });
    //   }
    //   return res.render(templateId, resumeDetails);
    // });
    // ========================================
  }

  //render template1 of view and providing resumeDetails object to template1(i.e. available inside view)
  // res.render("template1", resumeDetails);
  return res.render(templateId, resumeDetails);
};
