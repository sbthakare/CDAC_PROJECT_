import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    place: '',
    dob: '',
    gender: '',
    adharNo: '',
    linkedin: '',
    educationStream: '',
    educationInstitute: '',
    educationBoard: '',
    educationAdmissionYear: '',
    educationPassingYear: '',
    educationPercentage: '',
    projectTitle: '',
    projectPlatform: '',
    projectDescription: '',
    projectLink: '',
    Skill: '',
    certifications: '',
    hobbies: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files[0],
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    // Required Fields
    const requiredFields = [
      'firstName', 'lastName', 'place', 'dob', 'gender', 'adharNo', 'linkedin',
      'educationStream', 'educationInstitute', 'educationBoard', 'educationAdmissionYear',
      'educationPassingYear', 'educationPercentage', 'projectTitle', 'projectPlatform', 'projectDescription',
      'Skill', 'certifications', 'hobbies', 'resume'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        formErrors[field] = 'This field is required';
        formIsValid = false;
      }
    });

    // Aadhar Number: must be 12 digits
    if (formData.adharNo && !/^\d{12}$/.test(formData.adharNo)) {
      formErrors.adharNo = 'Aadhar number must be 12 digits';
      formIsValid = false;
    }

    // LinkedIn Profile: must be a valid URL
    if (formData.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedin)) {
      formErrors.linkedin = 'Please enter a valid LinkedIn profile URL';
      formIsValid = false;
    }

    // Percentage: Must be a valid number between 0 and 100
    if (formData.educationPercentage && (formData.educationPercentage < 0 || formData.educationPercentage > 100)) {
      formErrors.educationPercentage = 'Percentage must be between 0 and 100';
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Add your form submission logic here
    }
  };

  const generatePDF = () => {
    // Add your logic for generating a resume PDF
    alert('Generating PDF...');
  };

  return (
    <div className="section form-container">
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <div className="mb-3">
          <h3 className="text-center">Personal Details</h3>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <small className="text-danger">{errors.firstName}</small>}

          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
          />
          {errors.lastName && <small className="text-danger">{errors.lastName}</small>}

          <label htmlFor="place" className="form-label">Place</label>
          <input
            type="text"
            className="form-control"
            id="place"
            value={formData.place}
            onChange={handleInputChange}
            placeholder="Enter your place"
          />
          {errors.place && <small className="text-danger">{errors.place}</small>}

          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          {errors.dob && <small className="text-danger">{errors.dob}</small>}

          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-control"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <small className="text-danger">{errors.gender}</small>}

          <label htmlFor="adharNo" className="form-label">Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            id="adharNo"
            value={formData.adharNo}
            onChange={handleInputChange}
            placeholder="Enter your Aadhar number"
          />
          {errors.adharNo && <small className="text-danger">{errors.adharNo}</small>}

          <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
          <input
            type="url"
            className="form-control"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="Enter your LinkedIn profile link"
          />
          {errors.linkedin && <small className="text-danger">{errors.linkedin}</small>}
        </div>

        {/* Educational Details */}
        <div className="mb-3">
          <h3 className="text-center">Educational Details</h3>
          <label htmlFor="educationStream" className="form-label">Stream/Branch</label>
          <input
            type="text"
            className="form-control"
            id="educationStream"
            value={formData.educationStream}
            onChange={handleInputChange}
            placeholder="Enter your stream or branch"
          />
          {errors.educationStream && <small className="text-danger">{errors.educationStream}</small>}

          <label htmlFor="educationInstitute" className="form-label">Institute</label>
          <input
            type="text"
            className="form-control"
            id="educationInstitute"
            value={formData.educationInstitute}
            onChange={handleInputChange}
            placeholder="Enter your institute name"
          />
          {errors.educationInstitute && <small className="text-danger">{errors.educationInstitute}</small>}

          <label htmlFor="educationBoard" className="form-label">Board/University</label>
          <input
            type="text"
            className="form-control"
            id="educationBoard"
            value={formData.educationBoard}
            onChange={handleInputChange}
            placeholder="Enter your board or university"
          />
          {errors.educationBoard && <small className="text-danger">{errors.educationBoard}</small>}

          <label htmlFor="educationAdmissionYear" className="form-label">Admission Year</label>
          <input
            type="number"
            className="form-control"
            id="educationAdmissionYear"
            value={formData.educationAdmissionYear}
            onChange={handleInputChange}
            placeholder="Enter your admission year"
          />
          {errors.educationAdmissionYear && <small className="text-danger">{errors.educationAdmissionYear}</small>}

          <label htmlFor="educationPassingYear" className="form-label">Passing Year</label>
          <input
            type="number"
            className="form-control"
            id="educationPassingYear"
            value={formData.educationPassingYear}
            onChange={handleInputChange}
            placeholder="Enter your passing year"
          />
          {errors.educationPassingYear && <small className="text-danger">{errors.educationPassingYear}</small>}

          <label htmlFor="educationPercentage" className="form-label">Percentage</label>
          <input
            type="number"
            className="form-control"
            id="educationPercentage"
            value={formData.educationPercentage}
            onChange={handleInputChange}
            placeholder="Enter your percentage"
          />
          {errors.educationPercentage && <small className="text-danger">{errors.educationPercentage}</small>}
        </div>

        {/* Project Details */}
        <div className="mb-3">
          <h3 className="text-center">Project Details</h3>
          <label htmlFor="projectTitle" className="form-label">Project Title</label>
          <input
            type="text"
            className="form-control"
            id="projectTitle"
            value={formData.projectTitle}
            onChange={handleInputChange}
            placeholder="Enter your project title"
          />
          {errors.projectTitle && <small className="text-danger">{errors.projectTitle}</small>}

          <label htmlFor="projectPlatform" className="form-label">Platform/Technology Used</label>
          <input
            type="text"
            className="form-control"
            id="projectPlatform"
            value={formData.projectPlatform}
            onChange={handleInputChange}
            placeholder="Enter technologies used in the project"
          />
          {errors.projectPlatform && <small className="text-danger">{errors.projectPlatform}</small>}

          <label htmlFor="projectDescription" className="form-label">Project Description</label>
          <textarea
            className="form-control"
            id="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows="3"
            placeholder="Enter project description"
          ></textarea>
          {errors.projectDescription && <small className="text-danger">{errors.projectDescription}</small>}

          <label htmlFor="projectLink" className="form-label">Project Link</label>
          <input
            type="url"
            className="form-control"
            id="projectLink"
            value={formData.projectLink}
            onChange={handleInputChange}
            placeholder="Enter project link"
          />
          {errors.projectLink && <small className="text-danger">{errors.projectLink}</small>}
        </div>

        {/* Additional Details */}
        <div className="mb-3">
          <h3 className="text-center">Additional Details</h3>
          <label htmlFor="Skill" className="form-label">Skills</label>
          <input
            type="text"
            className="form-control"
            id="Skill"
            value={formData.Skill}
            onChange={handleInputChange}
            placeholder="Enter your skills"
          />
          {errors.Skill && <small className="text-danger">{errors.Skill}</small>}

          <label htmlFor="certifications" className="form-label">Certifications</label>
          <input
            type="text"
            className="form-control"
            id="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
            placeholder="Enter your certifications"
          />
          {errors.certifications && <small className="text-danger">{errors.certifications}</small>}

          <label htmlFor="hobbies" className="form-label">Hobbies</label>
          <input
            type="text"
            className="form-control"
            id="hobbies"
            value={formData.hobbies}
            onChange={handleInputChange}
            placeholder="Enter your hobbies"
          />
          {errors.hobbies && <small className="text-danger">{errors.hobbies}</small>}

          <label htmlFor="resume" className="form-label">Upload Resume</label>
          <input
            type="file"
            className="form-control"
            id="resume"
            onChange={handleFileChange}
          />
          {errors.resume && <small className="text-danger">{errors.resume}</small>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary m-3">Submit</button>
          <button type="button" className="btn btn-success m-3" onClick={generatePDF}>Generate PDF</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
