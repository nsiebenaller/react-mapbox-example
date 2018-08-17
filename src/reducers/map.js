import createReducer from '../helpers/createReducer'
import initialState from '../initialState';

const map = createReducer(initialState.map, {
  ['STORE_PARAM']: (state, action) => Object.assign({}, state, action.payload)
})

export default map
