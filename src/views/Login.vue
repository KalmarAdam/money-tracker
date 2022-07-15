<template>
  <ion-page>
    <ion-content>
      <div class="center">
      <ion-item lines="none"  class="login-input">
      <ion-input placeholder="Enter your email" v-model="email"></ion-input>
      </ion-item>
      <ion-item lines="none" class="login-input">
      <ion-input placeholder="Enter your password" type="password" v-model="password"></ion-input>
      </ion-item>
      <ion-button class="login-button" expand="block" @click="login()">Login</ion-button>
      <ion-button class="register-button" @click="$router.push('/register')" fill="outline">Or register instead</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {auth} from "@/main";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {IonButton, IonContent, IonInput, IonPage, IonItem} from "@ionic/vue";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    IonPage, IonContent, IonInput, IonButton, IonItem
  },
  methods: {
    async login() {
      await signInWithEmailAndPassword(auth, this.email, this.password)
      await this.$router.push('/home')
    }
  }
}


</script>

<style scoped>

.login-input{
  background: var(--ion-color-secondary);
  --background: var(--ion-color-secondary);
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 1rem;
  height: 70px;

}

.center{
  margin-top: 220px;
}

ion-input{
  text-align: left;
  margin-top: 15px;
}

.login-button{
  border-radius: 1rem;
  margin-right: 5px;
  margin-left: 5px;
}

.register-button{
  margin-left: 30%;
  position: absolute;
  margin-top: 15px;
}

</style>