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


<div class="wrapperadd">
      <ion-input placeholder="Cena" v-model="transaction.price"></ion-input>
      <ion-input placeholder="Kategoria" v-model="transaction.category"></ion-input>


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
        category: '',
        is_negative: '1'
      },
    }
  },
  methods: {
    submit(){
      axios.post('http://localhost:8888/moneytracker-be/api/v1/posts', this.transaction).then((response) => {
        this.$router.push('/')
      })
    }
  }
}


</script>

<style scoped>


.wrapperadd {
  --background: #f7f7f7;
  border-radius: 1rem;
  margin-bottom: 1rem;
  border-left: 5px white solid;
  border-right: 5px white solid;
  margin-top: 6rem;
}

.done-button{
 margin-top: 215px;
  border-left: 5px white solid;
  border-right: 5px white solid;
}

ion-segment{
  border-left: 5px white solid;
  border-right: 5px white solid;
  height: 60px;
}

ion-segment-button {

  --background-checked: var(--ion-color-danger);
  --indicator-color: var(--ion-color-danger);
  color: black;
}
</style>