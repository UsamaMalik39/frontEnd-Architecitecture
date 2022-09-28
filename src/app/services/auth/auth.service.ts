import { Injectable } from '@angular/core';
import { REQUESTTYPE } from 'src/app/models/enum/request-type.enum';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/async-services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _dataService: DataService) { }
 

}