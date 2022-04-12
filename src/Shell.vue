<template>
  <App />
</template>

<script lang="ts">
import App from "@/App.vue";
import { provideAuth0 } from "./services/auth0-plugin";

export default {
  name: "Shell",
  components: { App },
  setup(): void {
    provideAuth0();
  },
};
</script>
