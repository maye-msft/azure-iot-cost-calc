<template>
  <v-app dark style="height:100%">
    <v-app-bar
      app dense 
      color="deep-purple"
      dark
    >
      <v-toolbar-title>Azure IoT Cost Estimation</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content style="height:100%">
      <Calc/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Calc from './components/Calc';
// import Architecture from './components/Architecture';

export default {
  name: 'App',

  components: {
    Calc,
    // Architecture
  },

  data: () => ({
    //
  }),
};
</script>
