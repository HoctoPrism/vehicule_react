import { configureStore } from '@reduxjs/toolkit'
import {loginButtonSlice} from "./component/features/loginButton/loginButtonSlice";

export default configureStore({
  reducer: {
    loggedIn: loginButtonSlice
  },
})