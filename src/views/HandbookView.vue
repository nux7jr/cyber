<template>
  <div class="handbook">
    <h1 class="handbook__heading">Справочник</h1>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section class="handbook__item" v-else>
      <div class="load-info" v-if="loading">
        <h1 class="load-info__text">Loading...</h1>
      </div>

      <div
        class="handbook-info"
        v-else
        v-for="item in referenceBooksInfo"
        v-bind:key="item.id"
      >
        <div class="handbook-info__wrapper">
          <h3 class="handbook-info__heading">{{ item.title }}</h3>
          <div
            class="handbook-info__description"
            v-html="`${item.shortDescription}`"
          ></div>
        </div>
        <HandBookCard :HandBookCardInfo="item.file" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
import HandBookCard from "@/components/HandBooksCard.vue";
export default {
  name: "HandbookView",
  components: {
    HandBookCard,
  },
  data() {
    return {
      referenceBooksInfo: {},
      loading: true,
      errored: false,
    };
  },
  created() {
    this.getReferenceBooks();
  },
  methods: {
    getReferenceBooks() {
      axios
        .get("/api/reference_books/")
        .then((res) => {
          this.referenceBooksInfo = res.data["hydra:member"];
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
.handbook__heading {
  margin: 10px 0;
}
.handbook__item:last-child {
  margin-bottom: 80px;
}
.handbook-info {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
}
.handbook-info__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  margin-left: 5px;
}
.handbook-info__heading {
  margin: 10px 0 0 0;
}
</style>
