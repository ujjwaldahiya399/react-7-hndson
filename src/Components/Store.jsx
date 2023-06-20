import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slice';
const store = configureStore({
    reducer: {
        dataKey: dataReducer
    }
})

export default store;