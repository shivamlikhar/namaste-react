import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        role: ["user", "admin"],
    },
    reducers: {
        changerRole: () => {
            // we can't change the state
        }
    }
})

export const { changerRole } = userSlice.actions;

export default userSlice.reducer;