import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { concat, defaultIfEmpty, distinct, filter, find, findIndex, first, from, interval, last, map, merge, of, range, skip, take, tap, toArray, zip, count, min, max } from 'rxjs';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnangular test';
  customerlist: any;

  IsLoggedIn() {
    return localStorage.getItem('username')!=null;
  }



  constructor(private service: MasterService) {

    localStorage.setItem('username','admin');
  }

  
  Showcustomer(){
    if(this.IsLoggedIn()){
      this.service.GetCustomer().subscribe(result => {
        this.customerlist = result;
      });

    }
  }

}
