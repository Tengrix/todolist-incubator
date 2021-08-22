import {Dispatch} from "redux";
import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export const slice = createSlice({
    name:'app',
    initialState:initialState,
    reducers:{
        isInitializedAc:(state, action:PayloadAction<{isInitialized:boolean}>)=>{
            state.isInitialized = action.payload.isInitialized
        },
        setAppErrorAC:(state, action:PayloadAction<{error:string|null}>)=>{
            state.error = action.payload.error
        },
        setAppStatusAC:(state, action:PayloadAction<{status:RequestStatusType}>)=>{
            state.status = action.payload.status
        }
    }
})


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
}
export const appReducer = slice.reducer
export const {isInitializedAc, setAppStatusAC, setAppErrorAC} = slice.actions
export const initializeAppTC = () => (dispatch: Dispatch) => {

    authAPI.authMe().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({isLoggedIn:true}))
        }
    })
        .catch(()=>{

        })
        .finally(()=>{
            dispatch(isInitializedAc({isInitialized:true}))
        })
}