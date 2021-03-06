import firebase from "firebase/app";
import "firebase/auth"; // If you need it

// export const config = {
// 	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMEIN,
// 	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
// 	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

export const config = {
	apiKey: "AIzaSyCkhvdOPemjrFT7rAjhKkkDS-NNO43VsHM",
	authDomain: "bocchi-one.firebaseapp.com",
	projectId: "bocchi-one",
	storageBucket: "bocchi-one.appspot.com",
	messagingSenderId: "56743424123",
	appId: "1:56743424123:web:6f1de288c1a5c9a959f2de",
	measurementId: "G-N7WLPWHK5Y"
};

console.log(config)
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
console.log(firebase)
export const auth = firebase.auth();
export const Firebase = firebase;

export const Login = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result: any) {
			return result;
		})
		.catch(function (error) {
			console.log(error);
			const errorCode = error.code;
			console.log(errorCode);
			const errorMessage = error.message;
			console.log(errorMessage);
		});
};

// ログイン状態の検知
export const listenAuthState = (dispatch: any) => {
	return firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			dispatch({
				type: "login",
				payload: {
					user,
				},
			});
		} else {
			// User is signed out.
			// ...
			dispatch({
				type: "logout",
			});
		}
	});
};

export const firebaseUser = () => {
	return firebase.auth().currentUser;
};

// Logout
export const Logout = () => {
	auth.signOut().then(() => {
		window.location.reload();
	});
};