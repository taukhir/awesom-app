export interface AuthState {
    isAuthenticated : boolean;
    userName : string;
    accessToken : string;
    refreshToken : string;
}


const initState : AuthState = {
    isAuthenticated : false,
    userName : "",
    accessToken : "",
    refreshToken : ""

}

export const authReducer = (currentState=initState,action:any) =>{

    if(action.type == "SET_AUTH"){
        return {
             ...action.payload
        }
    }

    return currentState;
}