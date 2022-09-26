<template>
  <div class="card-list">
    <div class="card-list__wrapper">
      <section class="error" v-if="errored">
        <h1 class="error__message">
          We're sorry, we're not able to retrieve this information at the
          moment, please try back later
        </h1>
      </section>
      <div class="card-list__info" v-else>
        <div class="load-info" v-if="loading">
          <h1 class="load-info__text">Loading...</h1>
        </div>
        <div
          @click="currentPlotId = item.id"
          v-else
          v-for="item in products"
          v-bind:key="item.id"
          class="card-list__info-wrapper"
        >
          <h1 class="card-list__heading">{{ item.title }}</h1>
          <p class="card-list__text">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <ProductCard :products-info="currentPlot.products" />
  </div>
</template>
<script>
import axios from "@/axios/axios.js";
import ProductCard from "@/components/cards/ProductCard.vue";
export default {
  name: "CardList",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      loading: true,
      errored: false,
      currentPlotId: 2,
    };
  },
  computed: {
    currentPlot() {
      return (
        this.products.find((product) => product.id === this.currentPlotId) || {}
      );
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("api/plots")
        .then((res) => {
          this.products = res.data["hydra:member"] || [];
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
<style scoped>
.card-list__text {
  margin: 0;
}
.card-list__heading,
.load-info__text,
.error__message {
  margin: 0;
  min-width: 210px;
}
.card-list__info {
  margin: 10px 0;
  display: flex;

  gap: calc(100vw - 300px);

  overflow-x: auto;
}
.card-list__info::-webkit-scrollbar {
  display: none;
}
</style>
