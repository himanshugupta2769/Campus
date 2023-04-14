import {combineReducers} from 'redux'
import userReducer from "./userReducer";
import studentReducer from "./studentReducer";
import profileReducer from './profileReducer'


export default combineReducers({
  userReducer: userReducer,
  studentReducer: studentReducer,
  profileReducer: profileReducer,
});