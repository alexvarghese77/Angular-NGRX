import { IUserState } from './../state/user.state';
import { IAppState } from './../state/app.state';
import { createSelector} from "@ngrx/store";

const selectUsers=(state:IAppState)=>state.user;

export const selectUserList=createSelector(
    selectUsers,
    (state:IUserState)=>state.users
);
export const selectSelectedUser=createSelector(
    selectUsers,
    (state:IUserState)=>state.selectedUser
);