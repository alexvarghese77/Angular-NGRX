import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConfig } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl=`${environment}/config.json`

  constructor(private _http:HttpClient) { 
    
  }
  getConfig():Observable<IConfig>{
    return this._http.get<IConfig>(this.configUrl)
  }
}
