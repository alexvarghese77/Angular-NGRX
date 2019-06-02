import { userReducer } from './user.reducers';
import { IAppState } from './../state/app.state';
import {ActionReducerMap} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { configReducer } from './config.reducers';

export const appReducer:ActionReducerMap<IAppState,any>={
    router:routerReducer,
    user:userReducer,
    config:configReducer

}