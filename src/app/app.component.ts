import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateGuard } from './services/guards/deactivate-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Guess The Number!';
}
