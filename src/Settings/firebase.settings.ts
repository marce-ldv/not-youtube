import app from 'firebase/app';

export const settings = {
  apiKey: "AIzaSyDJ6yKmvagBnZv-gN_j-4LkgNMe5FV2As8",
  authDomain: "not-48bf6.firebaseapp.com",
  databaseURL: "https://not-48bf6.firebaseio.com",
  projectId: "not-48bf6",
  storageBucket: "not-48bf6.appspot.com",
  messagingSenderId: "771024386589",
  appId: "1:771024386589:web:ab4a02e4ab45f4b05b24f4",
  measurementId: "G-L984YX6TDV"
};

export default class Firebase {
  constructor() {
    app.initializeApp(settings);
  }
}