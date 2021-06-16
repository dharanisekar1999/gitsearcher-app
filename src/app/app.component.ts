import { Component } from '@angular/core';
import {AuthService} from './services/auth.service'

import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'github-searcher';
  constructor(private auth:AuthService,private bnIdle: BnNgIdleService,private router:Router,private toastr:ToastrService){
    this.bnIdle.startWatching(500).subscribe((res) => {
      if(res) {
          console.log("session expired");
          this.router.navigateByUrl('/signin')
          this.auth.signOut()
          this.toastr.error("Session expired Sign in again","",{closeButton:true})
      }
    })
    auth.getUser().subscribe(
      (user)=>
      {
        console.log(user)
      },
      (err)=>
      {
        console.log(err)
      }
    )
  }
}
