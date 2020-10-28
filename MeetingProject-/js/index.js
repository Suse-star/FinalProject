var firebaseConfig = {
    apiKey: "AIzaSyA4T1DPcq2KQb6y2ZyRcep3Ln25VtnHC1c",
    authDomain: "fir-wepapp-48855.firebaseapp.com",
    databaseURL: "https://fir-wepapp-48855.firebaseio.com",
    projectId: "fir-wepapp-48855",
    storageBucket: "fir-wepapp-48855.appspot.com",
    messagingSenderId: "561625258939",
    appId: "1:561625258939:web:864b7d34b785992c7b029e",
    measurementId: "G-QSXHW1DVTE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  
  firebase.auth.Auth.Persistence.LOCAL;

  var currentUser = {};

  $("#btn-login").click(function()
  {

      var email =  $("#email").val();
      var password =  $("#password").val();

      if(email != ""  && password != "")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email, password);

          result.catch(function(error)
          {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);
              window.alert("Message : " + errorMessage);

          });
      }
      else
      {
          window.alert("Form is incomplete! Please fill out all fields.");

      }
  });

  $("#btn-signup").click(function()
  {

      var email =  $("#email").val();
      var password =  $("#password").val();
      var cPassword =  $("#confirmPassword").val();

      if(email != ""  && password != "" && cPassword != "")
      {
          if(password == cPassword)
          {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                window.alert("Message : " + errorMessage);

            });
          }
          else
          {
            window.alert("Password do not match with the confirm passsword!");

          }
      }
      else
      {
          window.alert("Form is incomplete! Please fill out all fields.");

      }
  });


  $("#btn-googlelogin").click(function()
  {
    console.log("cliked")
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var currentUseruser = result.user;
        console.log("login");
        console.log(currentUser);
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Message : " + errorMessage);

    });
  });

  $("#btn-resetPassword").click(function()
  {
     var auth = firebase.auth();
     var email = $("#email").val();

     if(email != "")
     {
         auth.sendPasswordResetEmail(email).then(function()
         {
             window.alert("Email has been sent to you, please check and verify.");
         })
         .catch(function(error)
         {
             var errorCode = error.code;
             var errorMessage = error.message;

             console.log(errorCode);
             console.log(errorMessage);
             window.alert("Message : " + errorMessage);
         });
     }
     else
     {
         window.alert("Please write your email first");
     }
  });

  $("#btn-logout").click(function()
  {
     firebase.auth().signOut();
     console.log("out");
  });
