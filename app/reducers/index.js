// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import joint from './joint';

const rootReducer = combineReducers({
  counter,
  joint,
  router
});

export default rootReducer;
