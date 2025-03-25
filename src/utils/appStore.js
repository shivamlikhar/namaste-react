import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer, // this big reducer contains all reducers from here
        user: userReducer,
    }
});
// console.log(appStore.getState()); // this getState give us the current state of the appStore of which ever slice we added to the reducer
// console.log(appStore);
// console.log(appStore.dispatch); // allow state to be updated by dispatching actions to the store
// console.log(appStore.subscribe(() => console.log(appStore.getState()))); // subscribe to the store to get the updated state of the store

export default appStore;