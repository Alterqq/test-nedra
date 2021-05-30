import appReducer from './app.reducer';
import {combineReducers, compose, createStore} from 'redux';

const rootReducer = combineReducers({app: appReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers())

export default store
