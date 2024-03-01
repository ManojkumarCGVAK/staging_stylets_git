import { createStore, applyMiddleware, compose } from 'redux';
import { useMemo } from 'react'
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

// const initialState = {};

// const middleware = [thunk];

const composeEnhancers = typeof window !== "undefined" && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

// const enhancer = composeEnhancers(
// 	applyMiddleware(thunkMiddleware)
// 	// other store enhancers if any
// );
const enhancer = applyMiddleware(thunkMiddleware)
	// other store enhancers if any

// const store = createStore(rootReducer, initialState, enhancer);

// export default store;

let store

function initStore(initialState) {
  return createStore(
    reducers,
    initialState,
	enhancer
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}