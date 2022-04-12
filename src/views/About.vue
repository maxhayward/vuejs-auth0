<template>
  <div class="p-8 bg-gray-800 text-white">
    <div class="container mx-auto w-fit">
      <div class="home">
        <img alt="Vue logo" class="home-image pb-8" src="../assets/logo.png" />
        <p>This is the about page. You must be logged in to view this page.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>

<style scoped>
.home-image {
  display: inline;
}
</style>
