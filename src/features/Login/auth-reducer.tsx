import {Dispatch} from 'redux'
import {setAppErrorACType, setAppStatusAC, setAppStatusACType} from '../../app/app-reducer'
import {authAPI, LoginParamsType} from "../../api/todolists-api";
import {handleServerAppError} from "../../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {action} from "@storybook/addon-actions";

const initialState = {
    isLoggedIn: false
}

export const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    }
})

export const authReducer = slice.reducer
export const {setIsLoggedInAC} = slice.actions
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC({status:'loading'}))
    authAPI.login(data).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}))
            dispatch(setAppStatusAC({status:'loading'}))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch(() => {

        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value:false}))
        } else {
            handleServerAppError(res.data, dispatch)
        }
    }).catch(() => {

    })
}
// types

type ActionsType = ReturnType<typeof setIsLoggedInAC> | setAppStatusACType | setAppErrorACType