import {Component} from '@angular/core';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _socketService: SocketService) {
    if (localStorage.getItem('chat-username')) {
      _socketService.setUsername(localStorage.getItem('chat-username'));
    }
  }
}
