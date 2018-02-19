import {Component, OnInit} from '@angular/core';
import {SocketService} from '../socket.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public _userlist: string[];

  constructor(private _socketService: SocketService) {
  }

  ngOnInit() {
    this._socketService.Userlist.subscribe(value => this._userlist = value);
  }

}
