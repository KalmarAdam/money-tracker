<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Add</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class="content-wraper">

      <div class="wrapperadd">
        <ion-input placeholder="Price" v-model="transaction.price"></ion-input>
        <ion-input placeholder="Name" v-model="transaction.title"></ion-input>
      </div>

      <ion-select interface="popover" placeholder="Select Category" v-model="transaction.category">
        <!-- for loop na vsetky options, v UI sa zobrazi s velkym pismenom a do db sa ulozi s malym -->
        <ion-select-option
            v-for="categoryOption in categories"
            :key="categoryOption.toLowerCase()"
            :value="categoryOption.toLowerCase()">
          {{ categoryOption }}
        </ion-select-option>
      </ion-select>

      <ion-segment v-model="transaction.is_negative">
        <ion-segment-button value="0">
          <ion-label>+</ion-label>
        </ion-segment-button>
        <ion-segment-button value="1">
          <ion-label>-</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-button class="done-button" expand="block" @click="submit()">Done</ion-button>
    </div>
  </ion-content>
</template>

<script>
import {
  IonButton,
  IonContent,
  IonHeader,
  IonToolbar,
  IonInput, IonSegmentButton, IonSegment, IonLabel, IonTitle, modalController,
  IonSelect, IonSelectOption
} from "@ionic/vue";
import {addDoc, collection} from 'firebase/firestore'
import {auth, db} from "@/main";
import {DateTime} from "luxon";


export default {
  name: "Add",
  components: {
    IonHeader,
    IonContent,
    IonButton,
    IonToolbar,
    IonInput,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonTitle,
    IonSelect,
    IonSelectOption
  },
  data() {
    return {
      transaction: {
        price: '',
        title: '',
        is_negative: '1',
        category: '',
      },
      categories: [
        'Práca',
        'Supermarket',
        'Reštaurácie',
        'Cestovanie',
        'Oblečenie',
        'Domácnosť',
        'Zvieratá',
        'Zábava',
      ]
    }
  },
  methods: {
    async submit() {
      await addDoc(collection(db, "transactions"), {
        createdAt: DateTime.now().toMillis(),
        userId: auth.currentUser.uid,
        ...this.transaction,
      })
      await modalController.dismiss()
    },
  }
}


</script>

<style scoped>


.wrapperadd {

  margin-bottom: 1rem;
  margin-top: 6rem;
}

.wrapperadd ion-input {
  --background: var(--ion-color-secondary);
  border-radius: 1rem;
  margin-bottom: 1rem;
  --padding-start: 8px;
  --padding-bottom: 20px;
  --padding-top: 20px;
  font-size: 15px;
  height: 60px;

}

.done-button {
  margin-top: 1rem;
  border-radius: 1rem;
}

ion-segment {
  height: 60px;
  border-radius: 1rem;
  --background: var(--ion-color-secondary);
}

ion-segment-button {

  --indicator-color: var(--ion-color-danger);
  color: black;
  --border-radius: 1rem;
}

ion-content {
  --ion-background-color: var(--ion-color-tertiary);
}

.content-wraper {
  padding: 6px;
}
</style>