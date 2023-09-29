const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  teacher_id: {
    type: String,
    unique: true
  },
  first_name: { 
    type: String,
    // //required: true,
  },
  last_name: { 
    type: String,
    // //required: true,
  },
  fathersName: {
    type: String,
    //required: true,
  },
  dob: {
    type: Date,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
  },
  phone_number: {
    type: String,
    //required: true,
  },
  secondaryMobileNumber: String,
  profileImage: String,
  aboutUs: String, 
  address: {
    street: String,
    city: String,
    state: String,
    postal_code: String,
    country: String,
    location: {
      longitude: {
        type: String,
      },
      latitude: {
        type: String,
      },
    },
  },
  teaching_mode: String,
  subjects_taught: [{ 
    subject: String,
    class: String,
  }],
  batch_taught: [
    {
      batch_id: String,
      batch_name: String,
      batch_grade: String,
      batch_duration: String,
      batch_startDate: Date,
      batch_endDate: Date,
      batch_startTime: String,
      batch_endTime: String,
      students: [String],
    },
  ],
  qualifications: [ 
    {
      degree: String,
      institution: String,
      year: String,
    },
  ],
  experience: [ 
    {
      school_name: String,
      position: String,
      start_date: String,
      end_date: String,
    },
  ],

  req_status: [
    {
      sid: Number,
      status: String,
      about: String
    },
  ],
  certifications: [String],
  teaching_languages: [String], 
  additional_info: String,
  demo_video: String, 
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: String,
    default: null,
  },
  updatedBy: {
    type: String,
    default: null,
  },
  payment: {
    type: Object,
    upiInfo: {
      type: Array,
      name: String,
      mobile: String,
      app: String,
      upi: String,
      qrImage: String,
      active: Boolean,
    },
    default: { "upiInfo": [] }
  },
}, { timestamps: { createdAt: true, updatedAt: true }, versionKey: false });

const TeacherData = mongoose.model('TeacherData', teacherSchema);

module.exports = TeacherData;