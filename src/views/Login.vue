<template>
  <div class="container">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <q-btn color="primary" style="width: 200px">
            <div class="ellipsis">
              login
            </div>
          </q-btn>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          this.$router.push("/");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>
