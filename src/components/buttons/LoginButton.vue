<template>
  <button class="flex text-white font-bold py-2 px-4" @click="login">
    <p class="px-3">Log In</p>
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
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts">
import { useAuth0 } from "@/services/auth0-plugin";
export default {
  name: "LoginButton",
  setup(): { login: () => void } {
    const auth0 = useAuth0();
    const login = (): void => {
      if (!auth0) {
        return;
      }
      auth0.login();
    };
    return {
      login,
    };
  },
};
</script>
