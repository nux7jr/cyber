<template>
  <div class="handBookCard">
    <section class="error" v-if="errored">
      <h1 class="error__message">
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </h1>
    </section>
    <div v-else>
      <div class="load-info" v-if="loading">
        <p class="load-info__text">Loading image...</p>
      </div>
      <div v-else class="handBookCard__img">
        <img
          :src="`https://sibcoalapi.jslab.ru/${currBookInfo.path}`"
          alt="handbook image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "HandBookCard",
  data() {
    return {
      currBookInfo: {},
      loading: true,
      errored: false,
    };
  },
  props: {
    HandBookCardInfo: "",
  },
  created() {
    this.getHandBookCardInfo();
  },
  methods: {
    getHandBookCardInfo() {
      axios
        .get(`${this.HandBookCardInfo}`)
        .then((res) => {
          this.currBookInfo = res.data;
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
.load-info__text {
  margin: 10px;
}
</style>
