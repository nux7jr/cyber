<template>
  <div class="contacts">
    <h1 class="contacts__heading">Контакты</h1>
    <PhoneInfo />
    <EmailInfo />
    <AddressInfo />
  </div>
</template>

<script scoped>
import PhoneInfo from "@/components/contacts/PhoneInfo.vue";
import EmailInfo from "@/components/contacts/EmailInfo.vue";
import AddressInfo from "@/components/contacts/AddressInfo.vue";

export default {
  name: "ContactsView",
  components: {
    PhoneInfo,
    EmailInfo,
    AddressInfo,
  },
};
</script>

<style>
.contacts__heading {
  margin: 10px 0 0 0;
}
.contacts:last-child {
  margin-bottom: 80px;
}
</style>
