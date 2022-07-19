<template>
  <ion-app>

    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-button expand="block" fill="outline" @click="logout(); reloadPage();" >Logout</ion-button>
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
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonButton,

} from '@ionic/vue';
import { defineComponent } from 'vue';
import {DateTime} from "luxon";
import {signOut} from "firebase/auth";
import {auth} from "@/main";
import { menuController } from "@ionic/core";
export default defineComponent({
  name: 'App',

  components: {
    IonApp,
    IonContent,
    IonHeader,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    IonButton
  },

  methods: {
    async logout() {
      await signOut(auth)
      this.$router.push('/login')
    },
    reloadPage() {
      window.location.reload();
    },
  },
});


</script>