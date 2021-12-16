import { useEffect, useState } from "react";
import initAuth from "../UserAuth/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

// initialize firebase app
initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        // saveUserInfo(email, name, "POST");

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUser(user);
        // getIdToken(user)
        //     .then(idToken => {
        //         setToken(idToken);
        //     })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // useEffect(() => {
  //   fetch(`https://enigmatic-cliffs-56694.herokuapp.com/users/${user.email}`)
  //     .then((response) => response.json())
  //     .then((jsonData) => setAdmin(jsonData.admin));
  // }, [user.email]);

  const logOut = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUserInfo = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`https://enigmatic-cliffs-56694.herokuapp.com/users`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => {});
  };

  return {
    user,
    admin,
    // token,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    authError,
  };
};

export default useFirebase;
