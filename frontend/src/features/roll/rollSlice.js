import { createSlice } from '@reduxjs/toolkit'

export const rollSlice = createSlice({
    name: 'roll',
    initialState: {
      value: false,
    },
    reducers: {
      setRollFalse: (state) => {
        state.value = false
      },
      setRollTrue: (state) => {
        state.value = true
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setRollFalse, setRollTrue } = rollSlice.actions
  
  export default rollSlice.reducer