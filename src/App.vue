<template>
  <div v-if="auth0 && auth0.isLoading.value" class="page-layout">
    <Loader />
  </div>

  <div v-else class="page-layout__content">
    <NavBar />
    <router-view class="page-view" />
    <div class="remaining-content bg-gray-800"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import { useAuth0 } from "@/services/auth0-plugin";
import { onMounted } from "vue";
import { Auth0Plugin } from "./models/auth0-plugin";
export default {
  name: "App",
  components: { Footer, NavBar, Loader },
  setup(): { auth0: Auth0Plugin | null } {
    const auth0 = useAuth0();
    onMounted(async () => {
      if (!auth0) {
        return;
      }
      await auth0.createClient();
      await auth0.handleCallback();
    });
    return {
      auth0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

html,
body {
  height: 100%;
}

html {
  overflow-y: scroll;
}

body {
  display: flex;
  flex-direction: column;
}

.content {
  height: 100%;
  min-height: 100%;
}

.page-layout__content {
  height: 100%;
  min-height: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}

.remaining-content {
  flex-grow: 1;
}
</style>
