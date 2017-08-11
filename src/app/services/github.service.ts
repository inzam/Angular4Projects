import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id ='2f0dc2657a70232e8e27';
    private client_secret = 'f37175a3bb4799ee6c7e12e953255aff092204a1';

    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.username = 'inzam';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string){
        this.username=username;
    }
}