import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// import { useState } from 'react'
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Fill out the form below to get in touch with us.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="projectCompletionDate">Project Completion Date</Label>
                <Input id="projectCompletionDate" name="projectCompletionDate" type="date" value={formData.projectCompletionDate} onChange={handleChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="estimatedBudget">Estimated Budget</Label>
                <Select name="estimatedBudget" onValueChange={(value) => handleChange({ target: { name: 'estimatedBudget', value } })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20000+">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea id="projectDescription" name="projectDescription" value={formData.projectDescription} onChange={handleChange} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUs;