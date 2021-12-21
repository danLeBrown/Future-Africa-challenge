<template>
  <div>
    <div class="alert-div">
      <v-alert
        v-for="(alert, index) in messages"
        :key="index"
        transition="scale-transition"
        :type="alert.type == 'error' ? 'error' : 'success'"
        border="left"
        dismissible
        elevation="5"
      >
        <span class="alert-text">{{ alert.message }}</span>
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    this.$root.$on('newAlert', (data) => {
      this.messages.push(data)
    })
  }
}
</script>

<style scoped>
.alert-div {
  position: fixed;
  z-index: 11;
  bottom: 0;
  right: 1rem;
  background: none;
  width: 90%;
  max-width: 380px;
}
.alert-text {
  font: inherit;
  font-family: 'Montserrat', sans-serif;
  word-break: break-word;
}
</style>
