import questionsData from '~/assets/json/questions.json'

const state = () => ({
    questions: questionsData.questions,
    result: 0,
    hasTakenQuiz: false
})

const getters = {
  questions: (state) => state.questions,
}

const actions = {
    updateStatus({commit}, data){
        commit('setQuestionStatus', data)
    },
    markAnswers({commit}){
        commit('updateResult')
    }
}
const mutations = {
    setQuestionStatus: (state, data)=>{
        const questionsFx = state.questions.map(question=>{
            if(question.title === data.question.title){
                question.status = true
                question.selectedOption = data.answer
            }
            return question
        })

        state.questions = questionsFx
    },
    updateResult: (state)=>{
        state.questions.forEach(question => {
            if((question.selectedOption+1) === question.answer){
                state.result++;
            }
        });
        state.hasTakenQuiz = true
        return true
    },
    resetQuiz: (state)=>{
        state.questions.forEach(question => {
            delete question.selectedOption
            delete question.status
        })
        state.result = 0
        state.hasTakenQuiz = false
        return true
    }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
