import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./Login";
import { uploadImage } from "../utils/UploadImage"

interface FormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  designation: string;
  password: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  mobileNumber: "",
  designation: "",
  password: "",
};

const AddNewUser: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedImage, setSelectedImage] = useState<File>();

  const auth = getAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const colRef = collection(db, "users");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      console.log(user.uid);

      const imageUrl = await uploadImage(selectedImage as File)

      const userDoc = doc(colRef, user.uid);
      const userData = {
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        designation: formData.designation,
        imageUrl: imageUrl,
      };

      await setDoc(userDoc, userData);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="fullName">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="designation">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewUser;
