<template>
  <v-app dark>
    <v-app-bar
      app dense 
      color="deep-purple"
      dark
    >
      <v-toolbar-title>Azure IoT Cost Estimation</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <Calc/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Calc from './components/Calc';

export default {
  name: 'App',

  components: {
    Calc,
  },

  data: () => ({
    //
  }),
};
</script>
