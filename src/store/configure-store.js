import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers/'

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const enhancers = composeEnhancers(
        applyMiddleware(thunk),
        //window.devToolsExtension ? window.devToolsExtension() : f => f
    )

    return createStore(
        rootReducer,
        enhancers
    )
}

export default configureStore;