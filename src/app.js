const contentDiv = document.getElementById("content"); 
window.onload = goPath("login");

firebase.initializeApp(config);

// Get elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogOut = document.getElementById("btnLogOut");
let errorDiv = document.getElementById("error");

/**
 * Function that maps firebase error code from firebase API
 * to a descriptive message of the error in spanish
 * @param {string} errorCode 
 */
const codeMessageMapper = (errorCode) => {
  let message = "";
  switch(errorCode){
    case "auth/invalid-email":
      message = "Correo Electrónico inválido";
      break;
    case "auth/user-not-found":
      message = "Correo Electrónico no registrado";
      break;
    case "auth/wrong-password":
      message ="Contraseña incorrecta";
      break;
    case "auth/email-already-in-use":
      message = "Este correo eléctrónico ya está registrado, intenta con otro";
      break;
    case "auth/weak-password":
      message = "La contraseña debe tener al menos 6 caracteres";
      break;
    default:

  }

  return message;
}

/**
 * Wrapper for firebase authentication services.
 * @param {string} email 
 * @param {string} password 
 * @param {firebase auth service interface} object returned from firebase.auth() 
 * @param {string} authEvent signin or createuser 
 * @param {DOM element} errorSection DOM element where errors messages are shown
 */
const authEvent = (email, password, auth, authEvent, errorSection) => {

  let promise;

  if (authEvent === "signin") {
    promise = auth.signInWithEmailAndPassword(email, password);
  }
  else if (authEvent === "createuser") {
    promise = auth.createUserWithEmailAndPassword(email, password);
  }

  promise.then( () => {
    console.log("DEBUG_MSG auth event");
    errorSection.style.display = "none";
  }).catch((error) => {
    errorSection.style.display = "block";

    errorSection.innerHTML = codeMessageMapper(error.code);
    console.log(error.message);
  });
  
}

btnLogin.addEventListener("click", (event) => {
  authEvent(txtEmail.value, txtPassword.value, firebase.auth(), "signin", errorDiv);
});

btnSignUp.addEventListener("click", (event) => {
  authEvent(txtEmail.value, txtPassword.value, firebase.auth(), "createuser", errorDiv);
});


  // add log out event listener
  // logs out the user and "hard" refreshes window to #login
  btnLogOut.addEventListener("click", event => {
    firebase.auth().signOut();
    location.reload(true);

  });


// add realtime listener
/**
 * firebaseUser is an object with all information of a login user
 * if the user logs out or is not sign in then firebaseUser is null
 */

firebase.auth().onAuthStateChanged( (firebaseUser) => {
  // TODO create functions handleSignedInUser and handleSignedOutUser
  console.log("DEBUG_MSG: auth state change event");

  if (firebaseUser) {
    //console.log(firebaseUser);
    btnLogOut.style.visibility = "visible";
    goPath("timeline");

    //gets firebaseUser DATA for later assignment
    let firebaseUserInfo = {
      userID: `${firebaseUser.uid}`,
      userEmail: `${firebaseUser.email}`,
      userName: `${firebaseUser.displayName}`
    }
  console.log(firebaseUserInfo);
    
  } else {
    console.log("not logged in");
    btnLogOut.style.visibility = "hidden";
    goPath("login");
  }
    
});



// Navigate whenever the fragment identifier value changes.
//TODO
// window.addEventListener("hashchange", router);
// window.addEventListener("load", router);
