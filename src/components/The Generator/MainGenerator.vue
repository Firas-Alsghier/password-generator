<template>
  <section class="generator flex flex-col justify-center items-center">
    <the-password />
    <the-generator />
  </section>
</template>

<script>
import ThePassword from './ThePassword.vue';
import TheGenerator from './TheGenerator.vue';
export default {
  components: {
    ThePassword,
    TheGenerator,
  },
};
</script>

<style lang="scss" scoped></style>
