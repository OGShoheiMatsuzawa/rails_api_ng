import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

class SigninData {
  data: any;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {
  signinForm = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('', [])
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  signinData(data: any) {
    this.http.post("https://dev-sandbox-mat01-be.sakuramobile.jp/auth/sign_in", data)
    .subscribe((response) => {
      console.log(response);
      this.router.navigate(['posts']);
    })
  }
}
