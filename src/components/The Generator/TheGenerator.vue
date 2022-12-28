<template>
  <div class="generator w-4/6 bg-stone-100 h-85 rounded-md mb-5">
    <div class="generator-container w-11/12 h-full m-auto pt-10">
      <div class="length flex justify-between text-xl">
        <p>password length: 0</p>
        <div class="generate-btn">
          <button class="bg-slate-800 text-white py-2 px-3 rounded" @click="defaultRandomPassword">Generate</button>
        </div>
        <div class="bars flex">
          <p v-if="rangeValue < 8">Weak</p>
          <p v-if="rangeValue >= 8 && rangeValue < 20">medium</p>
          <p v-if="rangeValue >= 20">Strong</p>
          <p v-else></p>
          <div class="w-4 h-7 bg-red-700 mr-2 ml-5 transition-all duration-300" v-if="rangeValue < 8"></div>
          <div class="w-4 h-7 bg-white mr-2 ml-5 transition-all duration-300" v-else></div>
          <div class="w-4 h-7 bg-orange-500 mr-2 transition-all duration-300" v-if="rangeValue >= 8 && rangeValue < 20"></div>
          <div class="w-4 h-7 bg-white mr-2 transition-all duration-300" v-else></div>
          <div class="w-4 h-7 bg-green-600 mr-2 transition-all duration-300" v-if="rangeValue >= 20"></div>
          <div class="w-4 h-7 bg-white mr-2 transition-all duration-300" v-else></div>
        </div>
      </div>
      <div class="password-range flex flex-col items-center mt-12">
        <input type="range" class="border-none w-6/12" min="0" max="20" step="4" v-model="rangeValue" />
        <p>{{ rangeValue }}</p>
        <div class="w-2/4 mt-8 text-lg">
          <ul>
            <li>
              <input type="checkbox" id="numbers" v-model="$store.state.checkNumbers" />
              <label for="numbers" class="ml-4">Include numbers</label>
            </li>
            <li>
              <input type="checkbox" id="symbols" v-model="$store.state.checkSymols" />
              <label for="symbols" class="ml-4">Include Symbols</label>
            </li>
            <li>
              <input type="checkbox" id="uppercase" v-model="$store.state.checkUpperCase" />
              <label for="uppercase" class="ml-4">Uppercase</label>
            </li>
            <li>
              <input type="checkbox" id="lowercase" v-model="$store.state.checkLowerCase" />
              <label for="lowercase" class="ml-4">Lowercase</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  data() {
    return {
      rangeValue: 4,
      d: this.$store.state.checkUpperCase,
      // defaultPassword: `${this.$store.state.checkUpperCase ? '' : 'abcdefghijklmnopqrstuvwxyz'}${this.$store.state.checkNumbers ? this.$store.state.numbers : ''}${this.$store.state.checkLowerCase ? '' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}${this.$store.state.checkSymols ? this.$store.state.symols : ''}`,
      texts: '',
    };
  },
  methods: {
    defaultRandomPassword() {
      const convertToArray = `${this.$store.state.checkUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''}${this.$store.state.checkNumbers ? this.$store.state.numbers : ''}${this.$store.state.checkLowerCase ? 'abcdefghijklmnopqrstuvwxyz' : ''}${this.$store.state.checkSymols ? this.$store.state.symols : ''}`.split('');
      // eslint-disable-next-line no-unused-vars
      const randomItems = convertToArray.sort((a, b) => 0.5 - Math.random());
      const textLength = randomItems.toString().slice(0, this.rangeValue * 2);
      this.texts = textLength.split(',').join('');
      this.$store.dispatch('makeRandomPassword', this.texts);
    },
  },
  // computed: {
  //   ...mapState(['checkSymols', 'checkUpperCase', 'checkLowerCase', 'checkNumbers']),
  // },
};
</script>

<style lang="scss" scoped></style>
