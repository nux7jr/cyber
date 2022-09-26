<template>
  <div class="contacts">
    <h1 class="contacts__heading">Контакты</h1>
    <PhoneInfo />
  </div>
</template>

<script scoped>
import PhoneInfo from "@/components/contacts/PhoneInfo.vue";
export default {
  name: "ContactsView",
  components: {
    PhoneInfo,
  },
};
</script>

<style>
.contacts__heading {
  margin: 10px 0 0 0;
}
.contacts__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 35px;
}
.contacts-info:first-child {
  margin-top: 20px;
}
.contacts-info:last-child {
  margin-bottom: 80px;
}
.contacts-info__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  border: 2px solid #f6f6f6;
  border-radius: 12px;
}
</style>
