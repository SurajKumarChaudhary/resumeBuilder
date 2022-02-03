const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var userProfileSchema = new mongoose.Schema({
  regEmail: {
    type: String,
    ref: "user",
    required: true,
  },
  fname: String,
  lname: String,
  profession: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  email: String,
  education: [
    {
      university: String,
      Institute: String,
      degree: String,
      startYear: String,
      endYear: String,
      percentage: Number,
    },
  ],
  experience: [
    {
      organisation: String,
      jobProfile: String,
      skills: String,
      startDate: String,
      endDate: String,
      jobDescrption: String,
    },
  ],
  internships: [
    {
      organisation: String,
      role: String,
      skills: String,
      startDate: String,
      endDate: String,
      jobDescrption: String,
    },
  ],
  projects: [
    {
      projectTitle: String,
      technologies: String,
      projectDescription: String,
    },
  ],

  certifications: [
    {
      certName: String,
      certDescription: String,
      certOrganisation: String,
      validTill: String,
    },
  ],
  gender: String,
  maritalStatus: String,
  hobby1: String,
  hobby2: String,
  dob: String,
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
