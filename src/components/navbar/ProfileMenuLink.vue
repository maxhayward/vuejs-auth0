<template>
  <router-link
    :to="linkTo"
    class="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-0"
  >
    {{ name }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "ProfileMenuLink",
  props: {
    linkTo: String,
    name: String,
  },
};
</script>
