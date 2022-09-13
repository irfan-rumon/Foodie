import { Component, OnInit } from '@angular/core';
import {User} from '../../../app/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {} as User;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    if( this.auth.isAdmin(this.user)  )this.router.navigate(['/admin']);
    else this.router.navigate(['/login']);
  }

}
