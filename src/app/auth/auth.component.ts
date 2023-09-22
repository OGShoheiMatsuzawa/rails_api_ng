import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

class AuthData {
  data: any;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  signupForm = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', []),
    password_confirmation: new FormControl('', [])
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  postAuthData(data: any) {
    this.http.post("https://dev-sandbox-mat01-be.sakuramobile.jp/auth", data)
    .subscribe((response) => {
      console.log(response);
      this.router.navigate(['posts']);
    })
  }

}
