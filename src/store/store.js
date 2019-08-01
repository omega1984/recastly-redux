import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import data from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initialState = {
  videoList: data,
  currentVideo: null
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;