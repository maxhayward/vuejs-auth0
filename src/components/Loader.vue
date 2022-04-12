<template>
  <div class="grid place-items-center h-screen">
    <!-- <img :src="loadingImg" alt="Loading..." /> -->
    <img alt="Loading..." src="../assets/spinner.svg" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Loader",
  setup(): { loadingImg: string } {
    const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";
    return {
      loadingImg,
    };
  },
};
</script>
