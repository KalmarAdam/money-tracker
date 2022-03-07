<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" :icon="funnelOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Money Tracker</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-segment @ionChange="segmentChanged($event)" value="all">
          <ion-segment-button value="all">
            <ion-label>All</ion-label>
          </ion-segment-button>
          <ion-segment-button value="categories">
            <ion-label>Categories</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>

      <ion-toolbar class="summary-toolbar">
        <div class="wrapper">
          <div class="wrapper2">
            <div class="total">
              <h6 class="total-title">Total</h6>
              <h4 class="total-value">100</h4>
            </div>
          </div>
          <div class="wrapper3">
            <div class="income">
              <h6 class="income-title">Income</h6>
              <h4 class="income-value">100</h4>
            </div>
            <div class="outcome">
              <h6 class="outcome-title">Outcome</h6>
              <h4 class="outcome-value">100</h4>
            </div>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content> </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/vue";
import MessageListItem from "@/components/MessageListItem.vue";
import { defineComponent } from "vue";
import { getMessages } from "@/data/messages";
import { funnelOutline } from "ionicons/icons";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      funnelOutline,
    };
  },

  components: {
    IonContent,
    IonHeader,
    IonButtons,
    IonButton,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
  },
});
</script>

<style scoped>
.wrapper2 {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
.wrapper3 {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.total-value {
}

.total-title {
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  text-align: center;
}

ion-toolbar:not(.summary-toolbar) {
  --background: white;
}
.summary-toolbar {
  --border-color: white;
  border-radius: 1rem;
}
</style>
