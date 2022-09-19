import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(private userService: UserService) {
    let hello$ = userService.observe();

    // Subscribe app component to API
    hello$.subscribe(
      (data: any) => console.log(data),
      err => console.error(err)
    );
  }
  
}
