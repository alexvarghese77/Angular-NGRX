import { EConfigActions, GetConfig, GetConfigSuccess } from './../actions/config.actions';
import { ConfigService } from './../../services/config.service';
import { IConfig } from './../../models/user.interface';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ConfigEffects{
    @Effect()
    getConfig$=this._actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(()=>this._configService.getConfig()),
    switchMap((config:IConfig)=>{
        return of(new GetConfigSuccess(config))
    })
    )

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions) {}
        
    }







