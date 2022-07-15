<template>
  <ion-app>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item fill="outline" @click="logout()" >Logout</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,

} from '@ionic/vue';
import { defineComponent } from 'vue';
import {DateTime} from "luxon";
import {signOut} from "firebase/auth";
import {auth} from "@/main";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  },

  methods: {
    async logout() {
      await signOut(auth)
      this.$router.push('/login')
    }
  },
});


</script>