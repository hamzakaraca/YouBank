import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TimerService } from './services/other/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'YouBank';
  
}
