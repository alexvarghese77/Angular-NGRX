import { InitialUserState, IUserState } from './../state/user.state';
import { UserActions } from './../actions/user.actions';
import { EUserActions } from "../actions/user.actions";

export const userReducer=(state=InitialUserState,action:UserActions):IUserState=>{
switch(action.type){
    case EUserActions.GetUsersSuccess:{
        return{
            ...state,users:action.payload
        }
    }
    case EUserActions.GetUserSuccess:{
        return{
            ...state,selectedUser:action.payload
        }
    }
    default:
        return state;
}
}