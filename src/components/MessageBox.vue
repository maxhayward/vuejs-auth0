<template>
  <div
    class="alert-toast fixed top-0 right-0 m-8 w-5/6 md:w-full max-w-sm"
    id="alert-toast"
    v-if="alertEnabled"
  >
    <input type="checkbox" class="hidden" id="footertoast" />

    <label
      class="close cursor-pointer flex items-start justify-between w-full p-2 bg-gray-400 h-24 rounded-lg shadow-lg text-black"
      title="close"
      for="footertoast"
    >
      {{ message }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "MessageBox",
  data() {
    return {
      alertEnabled: false,
      message: "",
    };
  },
  methods: {
    showAlert(message: string): void {
      this.message = message;
      this.alertEnabled = true;
    },
    unshowAlert(): void {
      this.alertEnabled = false;
    },
    async delay(delay: number): Promise<void> {
      return new Promise((r) => {
        setTimeout(r, delay);
      });
    },
    async timedAlert(delaySeconds: number, message: string): Promise<void> {
      this.showAlert(message);
      await this.delay(delaySeconds * 1000);
      document.getElementById("footertoast")?.click();
      await this.delay(500);
      this.unshowAlert();
    },
  },
});
</script>

<style scoped>
/*Toast open/load animation*/
.alert-toast {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/*Toast close animation*/
.alert-toast input:checked ~ * {
  -webkit-animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: fade-out-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* -------------------------------------------------------------
	 * Animations generated using Animista * w: http://animista.net, 
	 * ---------------------------------------------------------- */

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}

@keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
}
</style>
