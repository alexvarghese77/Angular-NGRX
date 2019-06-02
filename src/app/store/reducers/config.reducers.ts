import { IConfigState } from './../state/config.state';
import { configActions, EConfigActions } from './../actions/config.actions';
import { initialConfigState } from '../state/config.state';

export const configReducer=(state=initialConfigState,action:configActions):IConfigState=>{
    switch(action.type)
    {
        case EConfigActions.GetConfigSuccess:
        {
            return {...state,config:action.payload}
        }
        default : return state
        
    }
}