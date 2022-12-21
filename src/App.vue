<template>
  <div class="container m-auto">
    <the-nav />
    <the-title />
    <the-generator />
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue';
import TheTitle from './components/TheTitle.vue';
import TheGenerator from './components/The Generator/MainGenerator.vue';
export default {
  name: 'App',
  components: {
    TheNav,
    TheTitle,
    TheGenerator,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

.container {
  width: 1065px;
  max-width: 1065px;
}
</style>
