const fireBase=require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

  const App=fireBase.initializeApp(firebaseConfig);
  const db=App.firestore();
  const auth=App.auth();

  export {db,auth};