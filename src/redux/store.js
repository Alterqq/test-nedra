import appReducer from './app.reducer';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({app: appReducer})

const store = createStore(rootReducer)

export default store
