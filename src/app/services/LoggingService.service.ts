import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class LoggingService {

    constructor(
        private http : HttpClient,
        private router : Router){
    }

    Login(user: object){
        this.http.post("http://challenge-react.alkemy.org/",user).toPromise()
        .then((response:any)=>{
                    //console.log(response.token);
                    localStorage.setItem("token",response.token);
                    this.router.navigate(["dashboard"]);
        })
        .catch((error)=>{
            Swal.fire({
                title: "Error al Ingresar",
                text: Error.toString(),
                icon: "error"  
            });
        });
            
    }
}