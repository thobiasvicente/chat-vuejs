<template>
  <div class="home">
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white">Welcome Magic Trade</h1>
        </q-parallax>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
