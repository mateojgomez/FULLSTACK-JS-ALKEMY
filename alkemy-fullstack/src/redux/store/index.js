import { configureStore } from '@reduxjs/toolkit'
import { projectReducers } from '../reducers'
export default configureStore({
    reducer: { projectData: projectReducers },
})
