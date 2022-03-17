import { createSlice } from "@reduxjs/toolkit"

const initialStore = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
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