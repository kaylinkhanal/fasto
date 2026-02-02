import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    username: '',
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserDetails: (state, actions) => {
            return {
                ...state,
                ...actions.payload
            }
        },
        logout: (state) => {
            return initialState
        },
      
    },
})

// Action creators are generated for each case reducer function
export const { addUserDetails, logout } = userSlice.actions

export default userSlice.reducer
