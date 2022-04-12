<template>
  <router-link
    :to="linkTo"
    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {{ name }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "NavBarLink",
  props: {
    linkTo: String,
    name: String,
  },
};
</script>
