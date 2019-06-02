import { HttpIUser } from './../../models/user.interface';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { UserService } from '../../services/user.service';
import {selectUserList} from '../selectors/user.selectors'
import {
    GetUsersSuccess,
    EUserActions,
    GetUserSuccess,
    GetUser,
    GetUsers
  } from '../actions/user.actions';

  @Injectable()
  export class UserEffects{
      @Effect()
      getUser$=this._actions$.pipe(
          ofType<GetUser>(EUserActions.GetUser),
          map(action=>action.payload),
          withLatestFrom(this._store.pipe(select(selectUserList))),
          switchMap(([id,users])=>{
              const selectedUser=users.filter(user=>user.id==+id)[0];
              return of(new GetUserSuccess(selectedUser));
          })
          
      );

      @Effect()
      getUsers$=this._actions$.pipe(
          ofType<GetUsers>(EUserActions.GetUsers),
          switchMap(()=>this._userService.GetUsers()),
          switchMap((userHttp:HttpIUser)=>of (new GetUsersSuccess(userHttp.users)))

      );
      constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>){

      }
  }