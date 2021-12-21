<template>
  <div>
    <v-app id="app-wrapper">
      <v-main>
        <Navbar />
        <Alert />
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Navbar from '~/components/inc/navbar.vue'
import Alert from '~/components/inc/alert'
export default {
  name: 'Default',
  components: {
    Navbar,
    Alert
  },
  mounted() {}
}
</script>

<style scoped></style>
