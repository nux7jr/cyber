<template>
  <div class="feed">
    <h1 class="feed__heading">Лента</h1>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else class="feed__item">
      <div class="load-info" v-if="loading">
        <h1 class="load-info__text">Loading...</h1>
      </div>

      <div
        class="feed-info"
        v-else
        v-for="item in feedInfo"
        v-bind:key="item.id"
      >
        <div class="feed-info__wrapper">
          <h3 class="feed-info__heading">{{ item.title }}</h3>
          <div
            class="feed-info__description"
            v-html="`${item.description}`"
          ></div>
          <img
            :src="`https://sibcoalapi.jslab.ru/${item.preview.path}`"
            alt="feed-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "FeedView",
  data() {
    return {
      feedInfo: {},
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
        .get("/api/posts")
        .then((res) => {
          this.feedInfo = res.data["hydra:member"];
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
.feed__heading {
  margin: 10px 0 0 0;
}
.feed__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 35px;
}
.feed-info:first-child {
  margin-top: 20px;
}
.feed-info:last-child {
  margin-bottom: 80px;
}
.feed-info__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.feed-info__heading {
  margin: 0;
}
</style>
