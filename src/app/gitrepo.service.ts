import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitrepoService {

  constructor() { }
  url = 'https://api.github.com/users/';
  user = {
    login:'',
    username:''
  }
  sendUserRequest(user){
    return fetch(this.url + user)
  }

  getUser(user, login){
    this.user.username = user;
    this.user.login = login;
  }

  repoReuqest(user){
    return fetch(this.url + user)
  }

}
