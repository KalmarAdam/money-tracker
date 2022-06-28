<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="content-wraper">

<div class="wrapperadd">
      <ion-input placeholder="Cena" v-model="transaction.price"></ion-input>
      <ion-input placeholder="Nazov" v-model="transaction.title"></ion-input>
</div>

      <ion-segment v-model="transaction.is_negative" :value="transaction.is_negative" >
        <ion-segment-button  :value="0">
          <ion-label>+</ion-label>
        </ion-segment-button>
        <ion-segment-button :value="1">
          <ion-label>-</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-button class="done-button" expand="block" @click="submit">Hotovo</ion-button>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonInput, IonSegmentButton, IonSegment, IonLabel
} from "@ionic/vue";
import axios from "axios";
import { addDoc, collection } from 'firebase/firestore'
import { db } from "@/main";
import {DateTime} from "luxon";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Add",
  components: {
    IonPage, IonHeader, IonContent, IonButton, IonToolbar,IonBackButton, IonButtons, IonInput, IonSegment, IonSegmentButton, IonLabel
  },
  data() {
    return {
      transaction: {
        price: '',
        title: '',
        is_negative: '1'
      },
    }
  },
  methods: {
    async submit(){
      await addDoc(collection(db, "transactions"), {
        createdAt: DateTime.now().toISO(),
        ...this.transaction,
      });
      await this.$router.push('/')
    }
  }
}


</script>

<style scoped>


.wrapperadd {

  margin-bottom: 1rem;
  margin-top: 6rem;
}

.wrapperadd ion-input{
  --background: var(--ion-color-secondary);
  border-radius: 1rem;
  margin-bottom: 1rem;
  --padding-start: 8px;
  --padding-bottom: 20px;
  --padding-top: 20px;
  font-size: 15px;
  height: 60px;

}

.done-button{
 margin-top: 1rem;
  border-radius: 1rem;


}

ion-segment{
  height: 60px;
  border-radius: 1rem;
  --background: var(--ion-color-secondary);
}

ion-toolbar {
  --background: var(--ion-color-tertiary);
  --border-width: 0px !important;
  margin-top: 10px;
  margin-left: 10px;
}
ion-segment-button {

  --indicator-color: var(--ion-color-danger);
  color: black;
  --border-radius: 1rem;
}
ion-content{
  --ion-background-color: var(--ion-color-tertiary);
}
.content-wraper{
  padding: 6px;
}
</style>