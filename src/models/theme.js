export default {
  namespace: 'theme',
  state: {
    color: 'green'
  },
  reducers: {
    changeColor(state, { payload: theme }) {
      return {
        color: theme
      }
    }
  },
  effects: {}
}