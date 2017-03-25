import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import quizReducer from './quiz';
import awaitReducer from './await';

const rootReducer = combineReducers({
  routing,
  quiz: quizReducer,
  await: awaitReducer,
})

export default rootReducer
