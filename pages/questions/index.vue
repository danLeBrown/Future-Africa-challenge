<template>
  <div>
    <v-container class="router-view">
      <div class=".meta-div">
        <h1><i class="icon bi bi-patch-question-fill"></i> Questions</h1>
        <p>Test your knowledge on venture capitalism</p>
      </div>
      <br />
      <div class="questions-div">
        <div>
          <ol>
            <div v-for="(question, index) in questions" :key="index">
              <Question :question-data="question" />
            </div>
            <br />
          </ol>
          <div class="btn-div">
            <button v-ripple class="btn action-btn" @click="submit">
              <span v-if="loading"
                ><v-progress-circular
                  indeterminate
                  color="white"
                  width="3"
                  size="20"
                ></v-progress-circular>
              </span>
              <span v-else
                ><i class="icon bi bi-check2-square"></i> SUBMIT</span
              >
            </button>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Question from '~/components/inc/question'
export default {
  name: 'Index',
  components: {
    Question
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    questions() {
      return this.$store.state.Question.questions
    }
  },
  created() {
    //   i want to create a  new quiz session everytime this page is loaded
    return this.$store.commit('Question/resetQuiz')
  },
  methods: {
    submit() {
      // first i want to animate the submit button so the user is sure that he/she has submitted
      this.loading = !this.loading

      //   next i want to check if every question has been answered
      const allQuestionsAnswered = this.questions.every((question) => {
        return !isNaN(question.selectedOption)
      })

      setTimeout(() => {
        this.loading = !this.loading
      }, 1200)
      //   if some/ any question has not been answered i want to display an error alert
      if (!allQuestionsAnswered) {
        this.$root.$emit('colorizeUnansweredQuestions')
        return this.$root.$emit('newAlert', {
          type: 'error',
          message: 'Please answer all the questions!'
        })
      }

      //   else i want to display a success alert
      this.$root.$emit('newAlert', {
        type: 'success',
        message: 'Your answers were submitted successfully'
      })

      // i want to mark the quiz and redirect the user to the result page
      this.$store.dispatch('Question/markAnswers')
      return this.$router.push('/result')
    }
  }
}
</script>

<style scoped></style>
