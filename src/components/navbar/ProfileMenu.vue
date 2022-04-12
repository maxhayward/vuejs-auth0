<template>
  <div>
    <div class="ml-3 relative" v-if="isAuthenticated">
      <div>
        <!--
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
        -->
        <button
          type="button"
          class="bg-gray-900 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          v-on:click="toggleProfileDropdown"
        >
          <span class="sr-only">Open user menu</span>
          <img class="h-8 w-8 rounded-full" :src="userPicture" alt="" />
        </button>
      </div>
    </div>
    <div
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
      id="user-menu"
      v-if="isAuthenticated"
    >
      <ProfileMenuLink linkTo="/profile" name="Your Profile" />
      <ProfileMenuLink linkTo="/settings" name="Settings" />
      <LogoutButton />
    </div>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@/services/auth0-plugin";
import LogoutButton from "@/components/buttons/LogoutButton.vue";
import ProfileMenuLink from "@/components/navbar/ProfileMenuLink.vue";
import { computed, ComputedRef } from "vue";
export default {
  name: "ProfileMenu",
  props: {
    userPicture: String,
  },
  components: { LogoutButton, ProfileMenuLink },
  setup(): { isAuthenticated: ComputedRef<boolean | null> } {
    const auth0 = useAuth0();
    const isAuthenticated = computed((): boolean | null => {
      if (!auth0) {
        return null;
      }
      return auth0.isAuthenticated.value;
    });
    return {
      isAuthenticated,
    };
  },
  methods: {
    toggleProfileDropdown(): void {
      document.getElementById("user-menu")?.classList.toggle("hidden");
    },
  },
};
</script>
