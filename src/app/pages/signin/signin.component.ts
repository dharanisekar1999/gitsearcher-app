import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import {NgForm} from '@angular/forms'
import {ToastrService} from 'ngx-toastr'
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService,private auth:AuthService) { }


  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
     const {email,password} =f.form.value
     this.auth.signIn(email,password)
     .then((res)=>
     {
       this.router.navigateByUrl('/')
       this.toastr.success("Signed In Successfully","",{closeButton:true})
     })
     .catch((err)=>
     {
       this.toastr.error(err.message,"",{closeButton:true})
     })
  }

}
