import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Subject} from 'rxjs/Subject';
import {Message} from './message';
import {environment} from '../environments/environment';

@Injectable()
export class SocketService {
  private _socket;
  private _userlist = new Subject<string[]>();
  private _messageList = new Subject<Message>();
  public Userlist = this._userlist.asObservable();
  public MessageList = this._messageList.asObservable();


  constructor() {
    this._socket = io(environment.socketServer);
    this._socket.on('userlist', this.onUserlistUpdate.bind(this));
    this._socket.on('message', this.onMessage.bind(this));
  }

  private onUserlistUpdate(usernames: string[]) {
    // console.log('New User:', usernames);
    this._userlist.next(usernames);
  }

  private onMessage(username: string, msg: string) {
    this._messageList.next(new Message(username, msg));
    // console.log('Incoming Message:', username, msg);
  }

  public sendMessage(msg: Message): void {
    this._socket.emit('message', msg.message);
  }

  public setUsername(newUsername: string): void {
    if (newUsername.length > 20) {
      return;
    }
    this._socket.emit('username', newUsername);
    localStorage.setItem('chat-username', newUsername);
  }

}




