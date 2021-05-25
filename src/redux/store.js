import appReducer from './appReducer';
import {createStore} from 'redux';

const store = createStore(appReducer)

export default store
