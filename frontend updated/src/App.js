import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";
import {userAction} from './Redux/Actions/userAction'
import { Provider } from "react-redux";
import Routeing from '../src/Routes'

function App() {
  return (
    <Provider store={store}>
      <Routeing />
    </Provider>
  );
}
export default App;