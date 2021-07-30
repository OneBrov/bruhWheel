import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './features/settings/settingsSlice'
import rollReducer from './features/roll/rollSlice'
import winnerReducer from './features/winner/winnerSlice'

export default configureStore({
    reducer: {
        settings: settingsReducer,
        roll: rollReducer,
        winner: winnerReducer,
    }
})