import {IUser} from '../../models/user.interface'


export interface IUserState{
    users:IUser[],
    selectedUser:IUser
}

export const InitialUserState:IUserState={
    users:null,
    selectedUser:null
}