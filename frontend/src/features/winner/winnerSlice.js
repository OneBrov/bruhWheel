import { createSlice } from '@reduxjs/toolkit'

export const winnerSlice = createSlice({
    name: 'winner',
    initialState: {
      value: -1,
    },
    reducers: {
        setNewWinner: (state, action) => {
            state.value = action.payload
        },
        clearWinner: (state) => {
            state.value = -1
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setNewWinner, clearWinner } = winnerSlice.actions
  
  export default winnerSlice.reducer