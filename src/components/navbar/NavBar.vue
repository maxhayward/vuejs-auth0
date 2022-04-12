<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <MobileMenuButton
            v-if="isAuthenticated"
            v-on:click="toggleMobileMenu"
          />
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-10 w-auto"
              src="../../assets/logo_large.png"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../../assets/logo_large.png"
              alt="Workflow"
            />
            <p class="text-white px-2">Vue / Auth0</p>
          </div>

          <div class="hidden sm:block sm:ml-6" v-if="isAuthenticated">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NavBarLink linkTo="/home" name="Home" />
              <NavBarLink linkTo="/about" name="About" />
            </div>
          </div>
        </div>
        <!-- Right Hand Side -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- <Notifications v-if="isAuthenticated" /> -->
          <ProfileMenu v-if="isAuthenticated" :userPicture="userPicture" />
          <LoginButton v-else />
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="hidden" id="mobile-menu" v-if="isAuthenticated">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NavBarLink linkTo="/plan" name="Plan" v-on:click="toggleMobileMenu" />
        <NavBarLink
          linkTo="/home"
          name="Home"
          v-on:click="toggleMobileMenu"
        />
        <NavBarLink
          linkTo="/about"
          name="About"
          v-on:click="toggleMobileMenu"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";
import { useAuth0 } from "@/services/auth0-plugin";
import LoginButton from "@/components/buttons/LoginButton.vue";
import NavBarLink from "@/components/navbar/NavBarLink.vue";
import ProfileMenu from "@/components/navbar/ProfileMenu.vue";
// import Notifications from "@/components/navbar/Notifications.vue";
import MobileMenuButton from "@/components/buttons/MobileMenuButton.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    NavBarLink,
    ProfileMenu,
    LoginButton,
    // Notifications,
    MobileMenuButton,
  },
  methods: {
    toggleMobileMenu(): void {
      document.getElementById("mobile-menu")?.classList.toggle("hidden");
    },
  },
  setup(): {
    isAuthenticated: ComputedRef<boolean | null>;
    userPicture: ComputedRef<string | undefined>;
  } {
    const auth0 = useAuth0();
    const isAuthenticated = computed((): boolean | null => {
      if (!auth0) {
        return null;
      }
      return auth0.isAuthenticated.value;
    });
    const userPicture = computed((): string | undefined => {
      if (!auth0) {
        return undefined;
      }
      return auth0.user.value?.picture;
    });
    return {
      isAuthenticated,
      userPicture,
    };
  },
});
</script>
