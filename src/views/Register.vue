<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <h4>Register Page</h4>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <div class="center">
        <ion-item lines="none" class="login-input">
          <ion-input placeholder="Enter your email" v-model="email"></ion-input>
        </ion-item>
        <ion-item lines="none" class="login-input">
          <ion-input placeholder="Enter your password" type="password" v-model="password"></ion-input>
        </ion-item>
        <ion-button class="login-button" expand="block" @click="register()">Register</ion-button>
        <div class="register-button">
          <ion-button @click="$router.push('/login')" fill="outline">Or Login instead</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {auth} from "@/main";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {IonPage, IonContent, IonInput, IonButton, IonItem} from "@ionic/vue";

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
    async register() {
      await createUserWithEmailAndPassword(auth, this.email, this.password)
      await this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

.login-input {
  background: var(--ion-color-secondary);
  --background: var(--ion-color-secondary);
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 1rem;
  height: 70px;

}

.center {
  margin-top: 220px;
}

ion-input {
  text-align: left;
  margin-top: 15px;
}

.login-button {
  border-radius: 1rem;
  margin-right: 5px;
  margin-left: 5px;
}

.register-button {
  display: flex;
  justify-content: center;
}

h4 {
  color: var(--ion-color-danger);
  display: flex;
  justify-content: center;
}

ion-toolbar {
  --border-style: none;
  --background: var(--ion-color-tertiary);
}
</style>