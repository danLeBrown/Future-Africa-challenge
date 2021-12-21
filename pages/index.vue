<template>
  <div>
    <section
      :style="`background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${require('~/assets/images/pexels-rodnae-productions-7414285-min.jpg')})`"
    >
      <v-container>
        <h1>So you think you know all about<br />venture capitalism, uhn?</h1>
        <p>Well then, let's get you tested, shall we?</p>
        <div class="btn-div">
          <nuxt-link to="/questions" class="btn action-btn"
            ><i class="icon bi bi-card-text"></i> Take the quiz</nuxt-link
          >
        </div>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
section {
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  background-size: cover;
  padding-top: 100px;
  color: #fff;
}

section h1 {
  font-size: 40px;
}

@media screen and (min-width: 768px) {
  section h1 {
    font-size: 50px;
  }
}
</style>
