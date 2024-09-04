import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  // TODO: Replace with your actual Firebase configuration
  // apiKey: "YOUR_API_KEY",
  // authDomain: "YOUR_AUTH_DOMAIN",
  // projectId: "YOUR_PROJECT_ID",
  // storageBucket: "YOUR_STORAGE_BUCKET",
  // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  // appId: "YOUR_APP_ID"

  apiKey: "AIzaSyDSF0vPrOKRmws4BYisSlH4h5ttpd6EIxA",
  authDomain: "supersymm-contact.firebaseapp.com",
  projectId: "supersymm-contact",
  storageBucket: "supersymm-contact.appspot.com",
  messagingSenderId: "187385416357",
  appId: "1:187385416357:web:bddbaf9493be5d6e7d9b4c",
  measurementId: "G-BKM9CMKG5M"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    projectCompletionDate: '',
    estimatedBudget: '',
    projectDescription: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        projectCompletionDate: '',
        estimatedBudget: '',
        projectDescription: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="date"
          name="projectCompletionDate"
          value={formData.projectCompletionDate}
          onChange={handleChange}
          placeholder="Estimated Project Completion Date"
          required
        />
        <input
          type="text"
          name="estimatedBudget"
          value={formData.estimatedBudget}
          onChange={handleChange}
          placeholder="Estimated Budget"
          required
        />
        <textarea
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Tell us about what you're trying to accomplish"
          required
        />
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Anything else that we should know?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;