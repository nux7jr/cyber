<template>
  <div class="slide-list">
    <div class="slide-list__info">
      <h1 class="slide-list__heading">Участок №1</h1>
      <p class="slide-list__text">«Большесырский разрез»</p>
    </div>
    <FirstSlide />
  </div>
</template>
<script>
import FirstSlide from "@/components/cards/FirstSlide.vue";
export default {
  name: "SlideList",
  components: {
    FirstSlide,
  },
};
</script>
<style scoped>
.slide-list__text {
  margin: 0;
}
.slide-list__heading {
  margin: 0;
}
.slide-list__info {
  margin: 10px 0;
}
</style>
