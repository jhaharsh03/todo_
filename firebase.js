var firebaseConfig = {
  apiKey: "AIzaSyBOoCVH9hROOyvzi2fMrx7D-9lJ52y_ygU",
  authDomain: "todotest-ea3ea.firebaseapp.com",
  // databaseURL: "https://todotest-ea3ea-default-rtdb.firebaseio.com",
  projectId: "todotest-ea3ea",
  storageBucket: "todotest-ea3ea.appspot.com",
  messagingSenderId: "922830104609",
  appId: "1:922830104609:web:81fbd67f83a942195c5b60",
  measurementId: "G-51S9TZ9QQ9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();


  // const firebaseConfig = {
  //   apiKey: "AIzaSyBOoCVH9hROOyvzi2fMrx7D-9lJ52y_ygU",
  //   authDomain: "todotest-ea3ea.firebaseapp.com",
  //   databaseURL: "https://todotest-ea3ea-default-rtdb.firebaseio.com",
  //   projectId: "todotest-ea3ea",
  //   storageBucket: "todotest-ea3ea.appspot.com",
  //   messagingSenderId: "922830104609",
  //   appId: "1:922830104609:web:81fbd67f83a942195c5b60",
  //   measurementId: "G-51S9TZ9QQ9"
  // };