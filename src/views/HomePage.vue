<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Money Tracker</ion-title>
      </ion-toolbar>
      <ion-toolbar>
      </ion-toolbar>

      <ion-toolbar class="summary-toolbar">
        <div class="wrapper">
          <div class="wrapper2">
            <div class="total">
              <h6 class="total-title">Total</h6>
              <h4 class="total-value">{{ total }}</h4>
            </div>
          </div>
          <div class="wrapper3">
            <div class="income">
              <h6 class="income-title">Income</h6>
              <h4 class="income-value">{{ totalIncome }}</h4>
            </div>
            <div class="outcome">
              <h6 class="outcome-title">Outcome</h6>
              <h4 class="outcome-value">{{ totalOutcome }}</h4>
            </div>
          </div>
        </div>
      </ion-toolbar>

      <ion-list>
        <ion-item lines="none" v-for="transaction in transactions" :key="transaction.id">
          <ion-label>
            <div class="list-item-label">
              <div class="list-item-left">
                <p>{{ formatDate(transaction.updated_at)}}</p>
                <p>{{ transaction.title }}</p>
              </div>
              <div class="list-item-amount">
                <p :style="transaction.is_negative == 1 ? 'color: red' : 'color: green'" >{{transaction.is_negative == null ? `+${parseFloat(transaction.price).toFixed(2)}` : `-${parseFloat(transaction.price).toFixed(2)}` }}€</p>
              </div>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>


    </ion-header>

    <ion-content>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button router-link="/add">
          <ion-icon :icon="arrowForwardCircleOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script>

import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonFab,
  IonItem,IonFabButton
} from "@ionic/vue";
import axios from "axios";
import {DateTime} from 'luxon';
import MessageListItem from "@/components/MessageListItem.vue";
import {defineComponent} from "vue";
import {getMessages} from "@/data/messages";
import {funnelOutline, arrowForwardCircleOutline} from "ionicons/icons";


export default defineComponent({
  name: "HomePage",
  data() {
    return {
      funnelOutline,arrowForwardCircleOutline,
      transactions:[]
    };
  },

  ionViewWillEnter() {
    axios.get('http://localhost:8888/moneytracker-be/api/v1/posts').then((response) => {
      this.transactions = response.data.data;
    })
  },

  methods: {
    formatDate(date) {
      console.log(date)
      return DateTime.fromFormat(date, 'yyyy-MM-dd hh:mm:ss').toFormat('dd. MM. yyyy')
    }
  },

  computed: {
    total() {
      let total = 0
      this.transactions.forEach((transaction) => {
        transaction.is_negative == null ? total += +transaction.price : total -= +transaction.price
      })
      return total.toFixed(2)
    },
    totalIncome() {
      let totalIncome = 0
      this.transactions.forEach((transaction) => {
        if(transaction.is_negative == null ) totalIncome += +transaction.price
      })
      return totalIncome.toFixed(2)
    },
    totalOutcome() {
      let totalOutcome = 0
      this.transactions.forEach((transaction) => {
        if(transaction.is_negative != null) totalOutcome -= +transaction.price
      })
      return totalOutcome.toFixed(2)
    }
  },

  components: {
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonFab,
    IonFabButton,
    IonItem,
    IonList,
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

ion-toolbar.summary-toolbar {
  --border-color: white;
  border-radius: 1rem;
  /*margin-left: 5px;*/
  /*margin-right: 5px;*/
  margin-bottom: 1rem;
  border-left: 5px white solid;
  border-right: 5px white solid;
}

.list-item-label {
  font-size: 15px;
  display:flex;
  justify-content: space-between;
}

.list-item-amount{
  display: flex;
  align-items: center;
}

.list-item-left {
  margin-bottom: 1rem;
}

.list-item-left p {
  text-align: left;
}

ion-item{
  background: #f7f7f7;
  --background: #f7f7f7;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 1rem;
}

ion-fab{
  margin-bottom: 3rem;
  margin-right: 1rem;
}
</style>
