import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public username = '';

  constructor(private _SocketService: SocketService) {
  }

  ngOnInit() {
    if (localStorage.getItem('chat-username')) {
      this.username = localStorage.getItem('chat-username');
    }
  }

  public changeUsername(event) {
    if (this.username.length <= 0) {
      return;
    } else {
      this._SocketService.setUsername(this.username);
    }
  }
}




