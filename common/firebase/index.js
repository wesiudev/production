import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
  orderBy,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

//images

const imagesRef = collection(db, "images");

async function getAllImages(count) {
  const filter = query(
    imagesRef,
    orderBy("creationTime", "desc"),
    limit(count)
  );
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}
async function getUserImages(email, count) {
  const filter = query(
    imagesRef,
    orderBy("creationTime", "desc"),
    where("author", "==", email),
    limit(count)
  );
  const response = await getDocs(filter);
  const images = response.docs.map((doc) => doc.data());
  return images;
}

async function addImage(req) {
  await addDoc(imagesRef, req);
}

//users
const usersRef = collection(db, "users");

async function getUserById(req) {
  const filter = query(usersRef, where("email", "==", req.email));
  const response = await getDocs(filter);
  const user = response.docs.map((doc) => ({ id: doc.id }));
  const userRef = doc(db, "users", user[0]?.id);
  return userRef;
}

async function getUser(req) {
  const filter = query(usersRef, where("email", "==", req.email));
  const response = await getDocs(filter);
  const user = response.docs.map((doc) => doc.data());
  if (user[0]?.email === req.email) {
    return user[0];
  } else if (!user.length) {
    const accountHistory = [
      { creationTime: Date.now(), action: "Joined decocanva" },
    ];
    const newUser = {
      email: req.email,
      hasPlan: false,
      balance: 300,
      tutorialStep: 0,
      accountHistory,
      isPrivate: true,
      isVerified: false,
      displayName: req.displayName,
    };
    await addDoc(usersRef, newUser);
    const response = await getDocs(filter);
    const user = response.docs.map((doc) => doc.data());
    return user[0];
  }
}
async function updateUserHistory(req) {
  const userRef = await getUserById(req);
  await updateDoc(userRef, {
    accountHistory: arrayUnion(req.accountHistory),
  });
  // if (user[0].length === 2) {
  //   user.accountHistory.sort((a, b) => a.creationTime - b.creationTime);
  // }
  // const accountHistory = [
  //   { creationTime: Date.now(), action: "Joined decocanva" },
  // ];
}

//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/
export {
  //providers
  provider,
  storage,
  auth,
  //images
  getUserImages,
  addImage,
  getAllImages,
  //users
  getUser,
  updateUserHistory,
};
