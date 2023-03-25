import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from "./reducers/auth.reducer"
import { sprintReducer } from './reducers/sprint.reducer';

let root=combineReducers({
    auth:authReducer,
    sprint:sprintReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);