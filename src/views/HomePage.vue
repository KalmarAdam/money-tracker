<template>
  <ion-page>
    <ion-header>
      <div class="background">
        <div class="toolbar-margin">
      <ion-toolbar class="summary-toolbar">
        <div class="wrapper">
          <div class="wrapper2">
            <div class="total">
              <h6 class="total-title">Celková Hodnota</h6>
              <div :style="total <= 1 ? 'color: var( --ion-color-danger)' : 'color: var( --ion-color-success)'" >
              <h4  class="total-value" >{{ total }}</h4>
              </div>
            </div>
          </div>
          <div class="wrapper3">
            <div class="income">
              <h6 class="income-title">Zárobky</h6>
              <h4 class="income-value">{{ totalIncome }}</h4>
            </div>
            <div class="outcome">
              <h6 class="outcome-title">Výdaje</h6>
              <h4 class="outcome-value">{{ totalOutcome }}</h4>
            </div>
          </div>
        </div>
      </ion-toolbar>
        </div>
      </div>
    </ion-header>

    <ion-content>

      <ion-list>
        <ion-item lines="none" v-for="transaction in reversedTransactions" :key="transaction.id">
          <ion-label>
            <div class="list-item-label">
              <div class="list-item-left">
                <p>{{ formatDate(transaction.updated_at)}}</p>
                <p>{{ transaction.title }}</p>
              </div>
              <div class="list-item-amount">
                <p :style="transaction.is_negative == 1 ? 'color: var( --ion-color-danger)' : 'color: var( --ion-color-success)'" >{{transaction.is_negative == null ? `+${parseFloat(transaction.price).toFixed(2)}` : `-${parseFloat(transaction.price).toFixed(2)}` }}€</p>
              </div>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button router-link="/add">

          <ion-icon :icon="add" size="large" ></ion-icon>
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
import {add,funnelOutline} from "ionicons/icons";


export default defineComponent({
  name: "HomePage",
  data() {
    return {
      funnelOutline,add,
      transactions:[]
    };
  },

  ionViewWillEnter() {
    axios.get('https://moneytracker.sk/cms/api/v1/posts').then((response) => {
      if(response.data.data)
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
    reversedTransactions(){
      return this.transactions.slice().reverse()
    },
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
.income-value{
color: var( --ion-color-success)
}
.outcome-value{
  color: var( --ion-color-danger)
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

ion-toolbar.summary-toolbar {

  --border-color: var(--ion-color-tertiary);
  border-radius: 1rem;
  margin-bottom: 1rem;
  border-left: 5px solid var(--ion-color-tertiary);
  border-right: 5px solid var(--ion-color-tertiary);
  --background: var(--ion-color-secondary);
}

.list-item-label {
  font-size: 15px;
  display:flex;
  justify-content: space-between;
  color: var(--ion-color-tertiary-contrast);
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
  background: var(--ion-color-secondary);
  --background: var(--ion-color-secondary);
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 1rem;
  --color: var(--ion-color-tertiary);

}

ion-fab{
  margin-bottom: 3rem;
}

.background{
  background: var(--ion-color-tertiary);
}

ion-content{
  --ion-background-color: var(--ion-color-tertiary);
}
.toolbar-margin{
  margin-top: 2rem;
}

</style>
