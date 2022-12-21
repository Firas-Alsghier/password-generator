<template>
  <div class="password w-4/6 bg-stone-100 h-14 rounded-md flex justify-between items-center px-6 text-2xl mb-10">
    <div class="text">
      <p class="font-bold">{{ randomPassword }}</p>
    </div>
    <div class="icons">
      <i class="fa-regular fa-copy cursor-pointer" @click="copyToTheClipBoard"></i>
      <i class="fa-solid fa-file-arrow-down ml-5 cursor-pointer" @click="DownloadThePassword"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['randomPassword']),
  },

  methods: {
    copyToTheClipBoard() {
      return navigator.clipboard.writeText(this.randomPassword);
    },

    DownloadThePassword() {
      const blobContent = new Blob([this.randomPassword], { type: 'text/plain' });
      const fileUrl = URL.createObjectURL(blobContent);
      const link = document.createElement('a');
      link.download = 'The Password';
      link.href = fileUrl;
      link.click();
    },
  },
};
</script>

<style lang="scss" scoped></style>
