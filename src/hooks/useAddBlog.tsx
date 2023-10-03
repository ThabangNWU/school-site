import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useAddBlog = () => {
    const postCollectionRef = collection(db, 'blog');

    const addPost = async (data: BlogPost) => {
        await addDoc(postCollectionRef, {
            userid: "",
            postTitle: data.postTitle,
            postBody: data.postBody,
            postTag: data.postTag,
            postDateTimeStamp: serverTimestamp(),
        });
    };

    return { addPost };
};

interface BlogPost {
    postTitle: string;
    postTag: string;
    postBody: string;
}
