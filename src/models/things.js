export default {
  namespace: 'things',
  state: {
    things: [
      'Learn dva',
      'Update Todo list',
      'Eat'
    ]
  },
  reducers: {
    addThing(state, { payload: thing }) {
      return {
        things: [...state.things, thing]
      }
    },
    deleteThing(state, { payload: index}) {
      return {
        things: state.things.filter((thing, i) => {
          return i !== index
        })
      }
    }
  },
  effects: {}
}