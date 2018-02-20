import {Component, OnInit} from '@angular/core';
import {SocketService} from '../../socket.service';
import {Message} from '../../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public MessageList: Message[];

  constructor(private _SocketService: SocketService) {
    this.MessageList = [];
  }

  ngOnInit() {
    this._SocketService.MessageList.subscribe(newMsg => {
      this.MessageList.push(newMsg);
    });
  }

}



