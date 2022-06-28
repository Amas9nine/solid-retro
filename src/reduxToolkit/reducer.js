import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    hello : 'hello'
}

export const helloWorld  = createAction('HELLO_WORLD')

export default createReducer(initialState , {
    [helloWorld] : function (state) {
        state.hello = state.hello + 'gj'
    }
})  

