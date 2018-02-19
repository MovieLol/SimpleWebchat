import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';
import {Message} from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public msg = '';
  private _shiftPressed = false;

  constructor(private _SocketService: SocketService) {
  }

  ngOnInit() {
  }

  public sendMessage(): void {
    this._SocketService.sendMessage(new Message('', this.msg));
    this.msg = '';
  }

  public textAreaKeyup(event): void {
    if (event.keyCode === 13 && !this._shiftPressed) {
      this.sendMessage();
    }
  }

  public textAreaKeydown(event): void {
    if (event.keyCode === 12) {
      this._shiftPressed = true;
    } else {
      if (this._shiftPressed && event.keyCode === 13) {
        return;
      } else {
        this._shiftPressed = false;
      }
    }
  }

}
