import { Dispatch } from 'redux'
import { SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType } from '../../app/app-reducer'
import {authAPI, LoginParamsType} from "../../api/todolists-api";
import {handleServerAppError} from "../../utils/error-utils";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data).then((res)=>{
        if(res.data.resultCode===0){
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('loading'))
        }else{
            handleServerAppError(res.data, dispatch)
        }
    })
        .catch(()=>{

        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then((res) => {
        if(res.data.resultCode===0){
            dispatch(setIsLoggedInAC(false))
        }else{
            handleServerAppError(res.data, dispatch)
        }
    }).catch(()=>{

    })
}
// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | SetAppStatusActionType | SetAppErrorActionType