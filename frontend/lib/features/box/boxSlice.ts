import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    height: 190,
    width: 400
}

export const boxSlice = createSlice({
    name: 'box',
    initialState,
    reducers: {
        incrementHeight: (state) => {
            state.height += 10
        },
        decrementHeight: (state) => {
            state.height -= 10
        },
      
    },
})

// Action creators are generated for each case reducer function
export const { incrementHeight, decrementHeight } = boxSlice.actions

export default boxSlice.reducer
