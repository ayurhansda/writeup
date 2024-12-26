import React, { useState } from "react";
import axios from "axios";
import "./FormStyles.css";

const Form = () => {
  const [formData, setFormData] = useState({
    st_name: "",
    st_email: "",
    st_subject: "",
    st_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/contact/submit", formData);
      alert("Message sent successfully!");
      setFormData({
        st_name: "",
        st_email: "",
        st_subject: "",
        st_message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" placeholder="Name" name="st_name" value={formData.st_name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" placeholder="Email" name="st_email" value={formData.st_email} onChange={handleChange} required />
        <label>Subject</label>
        <input type="text" placeholder="Subject" name="st_subject" value={formData.st_subject} onChange={handleChange} required />
        <label>Message</label>
        <textarea rows="7" placeholder="Enter your Message Here" name="st_message" value={formData.st_message} onChange={handleChange} required />
        <button className="btn btn-warning" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
