<template>
  <div class="email">
    <section class="error" v-if="errored">
      <p class="error__text">
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section class="email__item" v-else>
      <div class="load-info" v-if="loading">
        <p class="load-info__text">Loading...</p>
      </div>

      <div class="email-info" v-else>
        <div class="email-info__wrapper">
          <p class="email-info__heading">Электронная почта</p>
          <p class="email-info__text">{{ emailInfo.value }}</p>
        </div>
        <a class="email-info__link" :href="`mailto: ${emailInfo.value}`"></a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "@/axios/axios.js";
export default {
  name: "EmailInfo",
  data() {
    return {
      emailInfo: {},
      loading: true,
      errored: false,
    };
  },
  created() {
    this.getEmailInfo();
  },
  methods: {
    getEmailInfo() {
      axios
        .get("api/key_values/2")
        .then((res) => {
          this.emailInfo = res.data;
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
.email {
  border: 2px solid #f6f6f6;
  border-radius: 12px;
  margin-top: 20px;
}
.email-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.email-info__wrapper {
  margin-left: 10px;
}
.email-info__heading {
  color: #828991;
}
.email-info__text {
  font-weight: bold;
}
.email-info__link {
  display: block;
  background-color: #ffbe37;
  background-image: url(../../assets/emailbtn.png);
  background-repeat: no-repeat;
  height: 44px;
  width: 44px;
  margin-right: 10px;
  border-radius: 18px;
}
.error__text {
  margin: 5px;
}
.load-info__text {
  margin: 10px;
}
</style>
