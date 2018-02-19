import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SocketService} from './socket.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './chat/messages/messages.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageComponent } from './chat/messages/message/message.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserlistComponent,
    ChatComponent,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
