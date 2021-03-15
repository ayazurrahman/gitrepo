import { Component, OnInit } from '@angular/core';
import {GitrepoService} from '../gitrepo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:string;
  userResponseData:any;
  errorMessage = null;
  constructor(private repoService: GitrepoService) { }

  ngOnInit(): void {

  }
  searchUser(user){
    this.errorMessage = null;
    this.userResponseData = [];
    this.repoService.sendUserRequest(user).then(res=>{
      return res.json().then(res=>{
        console.log(res)
        if(res.message == "Not Found"){
          this.errorMessage = "User Not found";
        }
        this.userResponseData = res;
      })
    })
  }

  sendUser(){
    this.repoService.getUser(this.user, this.userResponseData.login)
  }


}
