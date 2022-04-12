<template>
  <div class="p-8 bg-gray-800 text-white">
    <div class="container mx-auto w-fit">
      <div class="home">
        <img alt="Vue logo" class="home-image pb-8" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to this VueJS / Auth0 example" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.home-image {
  display: inline;
}
</style>
