import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
    user = [true];
    repos = [];
    username:string;
  constructor( private _githubService: GithubService){
      this.user=[false];
  }
    searchUser(){
      this._githubService.updateUser(this.username);
        console.log('worked');
        this._githubService.getUser().subscribe(user=> {
                console.log(user);
               this.user = user;
        })

        this._githubService.getRepos().subscribe(repos=> {
                // console.log(user);
                this.repos = repos;
        })
      
    }
}
