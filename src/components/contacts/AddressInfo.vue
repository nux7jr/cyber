<template>
  <div class="address">
    <section class="error" v-if="errored">
      <p class="error__text">
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section class="address__item" v-else>
      <div class="load-info" v-if="loading">
        <p class="load-info__text">Loading...</p>
      </div>

      <div class="address-info" v-else>
        <div class="address-info__wrapper">
          <p class="address-info__heading">Адрес офиса</p>
          <p class="address-info__text">{{ addressInfo.value }}</p>
          <a
            class="address-info__link"
            href="https://goo.gl/maps/MmQ7PWLi7uxM1p8p9"
            >Открыть в навигаторе</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "AddressInfo",
  data() {
    return {
      addressInfo: {},
      loading: true,
      errored: false,
    };
  },
  created() {
    this.getAddressInfo();
  },
  methods: {
    getAddressInfo() {
      axios
        .get("api/key_values/3")
        .then((res) => {
          this.addressInfo = res.data;
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
.address {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
  margin-top: 20px;
}
.address-info__wrapper > p {
  margin-left: 10px;
}
.address-info__heading {
  color: #828991;
}
.address-info__text {
  font-weight: bold;
  margin: 10px 10px 10px 0;
}
.address-info__link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 12px;
  margin: 15px 10px 10px 10px;

  color: #18222c;

  background-color: #ffbe37;
  border-radius: 18px;
  font-weight: bold;
  font-size: 16px;
}
.address-info__link:visited {
  color: #18222c;
}
.error__text {
  margin: 5px;
}
.load-info__text {
  margin: 10px;
}
</style>
