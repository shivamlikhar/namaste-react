import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    // we're modifing the state directly here by using this reducers function
    reducers: {
        // state contain existing state of the application & action contain the payload object which is passed from the dispatch function
        // here addToCard is a function which is called by the dispatch function & it is known as action creator or reducer function
        addToCard: (state, action) => {
            // mutating the state directly over here(updating state directly)
            state.cartItems.push(action.payload);
        },
        // In this reducer when we call this prepare callback functions to the current reducer, we pass the object to the function name reducer & prepare
        // here when we call generatedaction created, then prepare function get called with whatever parameter we passed to it & then only
        // it should create & return an object(payload where we perform Operation)
        // in Short, take input argument for respective reducer through dispatch = > then that argument converted/ returned to payload or object by using prepare function
        // then that object/ payload is used to perform operation on the state
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.cartItems.length = 0; // [] empty the array, but = [] this will not work over here
        }

    }
});
console.log(cartSlice); // contain all object of slice in the form of name, initialState & reducer containg actions
// If we call any of the above action through dispatch 
// const dispatch = useDispatch();
// dispatch(addToCard({id: 1, name: "Pizza", price: 200}));  // here {id: 1, name: "Pizza", price: 200} is a action 2nd argument of addToCard from reducer which present inside slice
// so here in above line it will conside as addToCard as an action.type that needs to implement & {id: 1, name: "Pizza", price: 200}
//  consider as an action on which operation get performed

// IMP: in reducer , it never allow to mutate/ update the origal current state value, it always create a copy of the state & update the copy of the state

// Exporting the actions from the slice
export const { addToCard, removeItem, clearCart } = cartSlice.actions;

// Exporting the reducer
export default cartSlice.reducer;

//  you can muttate & immutate do anything with existing state if you use redux/toolkit, because it use immer library inside toolkit,
//  where proxy heps to wrap this up
// & if you use ild implementation by using createReduce then you have to uppdate the state by coping you cant upadte the state 
// directly by using this.state = "new value" you have to do immutate way to implement