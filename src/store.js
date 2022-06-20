import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import {loginButtonSlice} from "./component/features/loginButton/loginButtonSlice";
import TirageArraySlice from "./component/features/TirageArray/TirageArraySlice";
import thunk from 'redux-thunk'

export default configureStore({
  reducer: {
    loggedIn: loginButtonSlice,
    TirageArray: TirageArraySlice
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})