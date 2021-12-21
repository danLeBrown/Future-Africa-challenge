<template>
  <div class="router-view">
    <v-container>
      <div v-if="hasTakenQuiz">
        <div class="d-flex align-center justify-center">
          <img :src="require('~/assets/images/celebration.svg')" alt="" />
        </div>
        <div style="margin: 0 auto; text-align: center">
          <h1>RESULT: {{ `${result}/${totalQuestions}` }}</h1>
          <p>
            <b>You want to chill with the big boys, uhn?</b><br />
            {{ message }}
          </p>
          <div class="btn-div justify-center">
            <nuxt-link v-ripple to="/questions" class="btn default-btn"
              >Take the quiz again</nuxt-link
            >
          </div>
        </div>
      </div>
      <div v-else>
        <div class="d-flex align-center justify-center">
          <img :src="require('~/assets/images/oops.svg')" alt="" />
        </div>
        <div style="margin: 0 auto; text-align: center">
          <h2>
            <b
              >Hmmm...it appears that you're yet to take the quiz but somehow
              managed to teleport here</b
            ><br />
          </h2>
          <div class="btn-div justify-center">
            <nuxt-link v-ripple to="/questions" class="btn default-btn"
              >Take the quiz</nuxt-link
            >
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    result() {
      return this.$store.state.Question.result
    },
    totalQuestions() {
      return this.$store.state.Question.questions.length
    },
    message() {
      return this.result <= 3
        ? 'Well, you no fit today!'
        : 'Well, seems like today is your lucky day'
    },
    hasTakenQuiz() {
      return this.$store.state.Question.hasTakenQuiz
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
h1 {
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
}

@media screen and (min-width: 768px) {
  img {
    width: 50%;
  }
}
</style>
