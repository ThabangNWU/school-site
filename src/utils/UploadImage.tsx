import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { app } from "../components/Login";

const storage = getStorage(app);

export const uploadImage = async (file: File) => {
  const filename = file.name;

  const storageRef = ref(storage, "images/" + filename);

  try {
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    console.log("Image uploaded successfully!");

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
