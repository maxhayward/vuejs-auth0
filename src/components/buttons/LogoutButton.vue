<template>
  <button class="flex text-center py-2 px-10" @click="logout">
    <p class="px-3">Log Out</p>
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts">
import { useAuth0 } from "@/services/auth0-plugin";
export default {
  name: "LogoutButton",
  setup(): { logout: () => void } {
    const auth0 = useAuth0();
    const logout = (): void => {
      if (!auth0) {
        return;
      }
      auth0.logout({
        returnTo: window.location.origin,
      });
    };
    return {
      logout,
    };
  },
};
</script>
