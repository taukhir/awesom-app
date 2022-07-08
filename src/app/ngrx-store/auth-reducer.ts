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
    return currentState;
}