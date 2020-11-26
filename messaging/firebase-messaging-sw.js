
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDl7O47jcQ53Y6z3KqiR8-sJIFb1EW72tU",
  authDomain: "chatty-app-e8c13.firebaseapp.com",
  databaseURL: "https://chatty-app-e8c13.firebaseio.com",
  projectId: "chatty-app-e8c13",
  storageBucket: "chatty-app-e8c13.appspot.com",
  messagingSenderId: "979645707949",
  appId: "1:979645707949:web:6004e0844acce76234f824"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'You have new message';
  const notificationOptions = {
      body: payload.data.message,
      icon: payload.data.icon
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});