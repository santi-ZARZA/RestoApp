import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../services/LoggingService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent implements OnInit {

  formularioContacto = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  datos!:string;

  constructor(
    private router: Router,
    private logginService: LoggingService) { }

  ngOnInit(): void {
  }

  submit() {

      if (this.formularioContacto.valid)
      {
        let user = {
          email: this.formularioContacto.value.email,
          password: this.formularioContacto.value.password
        };
        let token = this.logginService.Login(user);
      }
  }
}
