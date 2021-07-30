import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
      value: 'https://onebruh.pythonanywhere.com/api/game?countGames=3&priceMore=0&priceLess=100000',
    },
    reducers: {
      setNewSettings: (state, action) => {
        state.value = action.payload
      },
      setSettingsByObject: (state, action) => {
        let search = 'https://onebruh.pythonanywhere.com/api/game?';
        let first = true
        for (let [key, value] of Object.entries(action.payload)) {
          if (!first){
                search += '&';
          }
          first = false
          search += `${key}=${value}`;
        }
        state.value = search
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setNewSettings, setSettingsByObject } = settingsSlice.actions
  
  export default settingsSlice.reducer