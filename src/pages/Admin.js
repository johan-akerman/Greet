import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect } from "react";
import { useState } from "react";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = firebase.firestore();
// db.settings({ timestampInSnapshots: true });

function Admin() {
  const firebaseConfig = {
    apiKey: "AIzaSyBHkB1zh6s2amVeIGhEMDQ-Zwry4QEmubg",
    authDomain: "greet-9b04d.firebaseapp.com",
    projectId: "greet-9b04d",
    storageBucket: "greet-9b04d.appspot.com",
    messagingSenderId: "74206322993",
    appId: "1:74206322993:web:33af2cc7d5da6966855010",
    measurementId: "G-4JTCL19WTB",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [companies, setCompanies] = useState();

  // Get a list of cities from your database
  async function getCities(db) {
    const citiesCol = collection(db, "Companies");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    setCompanies(cityList);
    console.log(companies);
    return cityList;
  }

  getCities();

  return <h1>hej</h1>;
}

export default Admin;
