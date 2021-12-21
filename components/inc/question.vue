<template>
  <div>
    <v-container>
      <li :style="hasBeenAnswered === false ? 'color: red' : ''">
        <h3>
          {{ question.title }}
        </h3>
      </li>
      <div>
        <v-radio-group @change="updateQuestionStatus($event)">
          <v-radio
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
            :label="option"
            :value="optionIndex"
            color="action"
            on-icon="$radioOn"
          ></v-radio>
        </v-radio-group>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Question',
  // eslint-disable-next-line vue/require-prop-types
  props: ['questionData'],
  data() {
    return {
      hasBeenAnswered: null
    }
  },
  computed: {
    question() {
      return this.questionData
    }
  },
  mounted() {
    this.$root.$on('colorizeUnansweredQuestions', () => {
      if ([undefined, null, false].includes(this.question.status)) {
        return (this.hasBeenAnswered = false)
      }
      return true
    })
  },
  methods: {
    //   on change of the radio value, i want to change update the status of this particular question form the state
    updateQuestionStatus(e) {
      this.hasBeenAnswered = true
      this.$store.dispatch('Question/updateStatus', {
        question: this.question,
        answer: e
      })
    }
  }
}
</script>

<style scoped>
li {
  font-size: 1rem;
  font-weight: bold;
}
</style>
