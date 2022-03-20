import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload 
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
    },
})

// destructure - this line enables the rest of the app to access these objects
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

// selectors - enable the redux navSlice to fetch information from the rest of the app
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

// reducer - connects the entire navSlice with store.js
export default navSlice.reducer 