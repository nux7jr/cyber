<template>
  <div class="phone">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section class="phone__item" v-else>
      <div class="load-info" v-if="loading">
        <p class="load-info__text">Loading...</p>
      </div>

      <div class="phone-info" v-else>
        <div class="phone-info__wrapper">
          <p class="phone-info__heading">Приемная</p>
          <p class="phone-info__text">{{ phoneInfo.value }}</p>
        </div>
        <a
          class="phone-info__link"
          :href="`wtai://wp/mc;${phoneInfo.value}`"
        ></a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "PhoneInfo",
  data() {
    return {
      phoneInfo: {},
      loading: true,
      errored: false,
    };
  },
  created() {
    this.getPhoneInfo();
  },
  methods: {
    getPhoneInfo() {
      axios
        .get("api/key_values/1")
        .then((res) => {
          this.phoneInfo = res.data;
        })
        .catch((error) => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.phone {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
  margin-top: 20px;
}
.phone-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phone-info__wrapper {
  margin-left: 10px;
}
.phone-info__heading {
  color: #828991;
}
.phone-info__text {
  font-weight: bold;
}
.phone-info__link {
  display: block;
  background-color: #ffbe37;
  background-image: url(../../assets/buttons.png);
  background-repeat: no-repeat;
  height: 44px;
  width: 44px;
  margin-right: 10px;
  border-radius: 18px;
}
</style>
