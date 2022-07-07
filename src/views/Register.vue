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
        <ion-button class="login-button" expand="block" @click="register()">Register</ion-button>
        <ion-button class="register-button" @click="$router.push('/login')" fill="outline">Or Login instead</ion-button>
      </div>
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
  margin-top: 50%;
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
  position: center;
  margin-top: 15px;
}

</style>