import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  HaveAccess(role: any) {
    if (role == 'admin')
      return true;
    else
      return false;
  }

  GetCurrentRole(username:any){
    if(username=='adminuser'){
      return 'admin';
    }else{
      return '';
    }

  }

  GetCustomer(){
   const apiurl='https://localhost:44308/Customer'

   return this.http.get(apiurl);

  }

}
