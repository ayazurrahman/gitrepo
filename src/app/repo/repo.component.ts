import { Component, Input, OnInit } from '@angular/core';
import {GitrepoService} from '../gitrepo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:string;
  repoResponseData:any;
  tempData:any;
  userName:string;
  errorMsg:string;
  constructor(private repoService: GitrepoService) { }

  ngOnInit(): void {
    this.errorMsg = null;
    this.userName = this.repoService.user.login;
    const url = this.repoService.user.username+"/repos"
    if(this.repoService.user.username){
      this.repoService.repoReuqest(url).then(res=>{
        return res.json().then(res=>{
          console.log(res)
        if(res.length == 0){
          this.errorMsg = "No Repository available"
        }
        this.repoResponseData = res;
        this.tempData = this.repoResponseData;
        })
      })
    }
    
  }

  searchRepo(searchInput){
    this.errorMsg = null;
    this.repoResponseData = this.tempData;
    this.repoResponseData = this.repoResponseData.filter(item=>{
      return item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    })

    if(this.repoResponseData.length == 0){
      this.errorMsg = "No Repository found with above search"
    }
  }

}