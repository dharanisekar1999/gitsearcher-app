import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {GithubService} from '../../services/github.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any=null;
  userName!: string;
  error: any=null
  constructor(private gitubService:GithubService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  handleFindUser()
  {
    this.gitubService.getUserDetails(this.userName).subscribe((user):any=>
    {
      this.user=user;
      this.error=null;
      this.ref.detectChanges();
    },
    (err)=>
    {
      this.user=null;
      this.error="User Not Found";
      this.ref.detectChanges();
    }
    )
  }

}
