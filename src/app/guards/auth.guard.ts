import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(){
    if (localStorage.getItem("token")!=null || localStorage.getItem("token")!= undefined) {
      return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
