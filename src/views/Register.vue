<template>
  <ion-page>
    <ion-content>
      <h1>Register</h1>
      <ion-input v-model="email"></ion-input>
      <ion-input v-model="password"></ion-input>
      <ion-button @click="register()">Register</ion-button>
      <ion-button @click="$router.push('/login')" fill="outline">Or login instead</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {auth} from "@/main";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {IonPage, IonContent, IonInput, IonButton} from "@ionic/vue";

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
    async register() {
      await createUserWithEmailAndPassword(auth, this.email, this.password)
      await this.$router.push('/home')
    }
  }
}
</script>