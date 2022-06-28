<template>
  <ion-page>
    <ion-content>
      <h1>Login</h1>
      <ion-input v-model="email"></ion-input>
      <ion-input v-model="password"></ion-input>
      <ion-button @click="login()">Login</ion-button>
      <ion-button @click="$router.push('/register')" fill="outline">Or register instead</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {auth} from "@/main";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {IonButton, IonContent, IonInput, IonPage} from "@ionic/vue";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    IonPage, IonContent, IonInput, IonButton
  },
  methods: {
    async login() {
      await signInWithEmailAndPassword(auth, this.email, this.password)
      await this.$router.push('/home')
    }
  }
}
</script>