<template>
  <nav class="flex justify-between mt-8 mb-8">
    <div class="logo">
      <h1 class="text-3xl dark:text-white"><i class="fa-solid fa-unlock-keyhole text-green-700"></i> pg</h1>
    </div>
    <div class="dark-mode bg-slate-50 w-20 rounded-full self-center">
      <div class="container flex justify-between">
        <div class="night bg-zinc-800 text-white text-left pl-1.5 rounded-full w-5/12">
          <i class="fa-solid fa-moon"></i>
        </div>
        <div class="ball bg-slate-200 w-6 h-6 rounded-full self-center cursor-pointer translate-x-4 transition-all duration-500" @click="darkMode"></div>
        <div class="day rounded-full w-5/12 text-right bg-white text-yellow-400 pr-1.5">
          <i class="fa-solid fa-sun"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      switchMode: true,
    };
  },
  methods: {
    darkMode() {
      document.querySelector('html').classList.toggle('dark');
      document.querySelector('body').classList.add('dark:bg-slate-800', 'transition-all', 'duration-300');
      document.querySelector('.ball').classList.toggle('-translate-x-4');
    },
  },
};
</script>

<style lang="scss" scoped>
.logo h1 {
  font-family: 'Carter One', cursive;
}
</style>
