import { combineReducers } from 'redux';

import { authUserReducer } from './auth';

const rootReducer = combineReducers({
    authUserReducer
});
export default rootReducer;