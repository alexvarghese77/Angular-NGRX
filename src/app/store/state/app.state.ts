import { IUserState, InitialUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';
import {RouterReducerState} from '@ngrx/router-store';

export interface IAppState{
    router?:RouterReducerState,
    user:IUserState;
    config:IConfigState
}
export const initialAppState:IAppState={
    user:InitialUserState,
    config:initialConfigState
}

export function getInitialState():IAppState{
return initialAppState
}