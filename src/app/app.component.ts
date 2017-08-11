import { Component } from '@angular/core';
import {ProfileComponent} from './components/profile.component';
import {GithubService} from './services/github.service';
import {HttpModule} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'app';
}
