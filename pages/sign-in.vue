<template>
    <div class="container p-4">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-8 col-sm-2 mb-4 pt-2 pb-1 justify-content-center text-center"
                 style="background-color: rgb(255, 255, 255); color: rgb(54, 65, 82); box-shadow: none; border-radius: 8px; overflow: hidden; border: none rgba(224, 224, 224, 0.596);">
                <nuxt-img class="mx-auto" src="/images/site_logo1.png" alt="logo" format="webp" style="width: 240px;" />
                <h4 class="display-6 fw-bold p-2 m-0">Sign In </h4>
                <a
                    class="btn mb-3 top-phone"
                    style="background-color: #0394fe; color: white; width: 80%; font-size: large; font-weight:600;"
                    @click="signInWithGoogle"
                >
                    <i class="fab fa-google" style="font-size: auto; float: left;"></i>
                    Sign in with Google
                </a>

                <a href="#" class="btn mb-5 top-phone"
                   style="background-color: #0394fe; color: white; width: 80%; font-size: large; font-weight:600;">
                    <i class="fab fa-facebook" style="font-size: auto; float: left;"></i>
                    Sign in with Facebook
                </a>



            </div>
        </div>
    </div>
</template>
<script>
// import firebase from "~/plugins/firebase.js";
import { auth } from '~/plugins/firebase.js';
// import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {initializeApp} from "firebase/app";
export default {
    data() {
        return {
            user: null,
            firebaseConfig: {
                apiKey: "AIzaSyBoDWsKS4H1n7p-sZEJzUSYpx05QHQhlLM",
                authDomain: "magic-school-99ef3.firebaseapp.com",
                projectId: "magic-school-99ef3",
                storageBucket: "magic-school-99ef3.appspot.com",
                messagingSenderId: "1047065101146",
                appId: "1:1047065101146:web:8c8ac3e4fd7cbf9da3e963",
                measurementId: "G-KH1G3MCVMM"
            }
        };
    },
    // mounted() {
    //     // Check authentication state when the component is mounted
    //     auth.onAuthStateChanged(user => {
    //         if (user) {
    //             // User is signed in
    //             console.log('User:', user);
    //             this.user = user;
    //         } else {
    //             // No user is signed in
    //             console.log('No user signed in');
    //             this.user = null;
    //         }
    //     });
    // },
    methods: {
        signInWithGoogle() {
            const firebaseApp = initializeApp(this.firebaseConfig);
            const authenticate = getAuth(firebaseApp);
            const provider = new GoogleAuthProvider();
            signInWithPopup(authenticate, provider).then((result) => {
                console.log("Result.....")
                console.log(result)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                localStorage.setItem('user',user);
                localStorage.setItem('oauthToken',result._tokenResponse.oauthIdToken)
                // this.$router.push('/');
                this.$router.go(-1);
            }).catch((error) => {
                console.log("Error")
                console.log(error)
            })
        }
    }
}



</script>
