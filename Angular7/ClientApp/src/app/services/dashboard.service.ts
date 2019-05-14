import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})

export class DashBoardService {
  private Url = 'api/dashboard/';
  private hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/taskHub")
    .build();

  constructor(private http: HttpClient) {
    this.startConnection();
  }

  GetDashBoard(): Observable<any> {
    return this.http.get<any>(this.Url + 'GetDashBoard');
  }

  private startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.onReceiveMessage();
        this.SendMessage('Message sent from dashboard service!');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  private onReceiveMessage = () => {
    this.hubConnection.on('ReceiveMessage', (message: string) => {
      console.log('Message received:' + message);
    });
  }

  public SendMessage(message: string) {
    this.hubConnection.send("SendNewMessage", message)
      .then(() => console.log('Message send: ' + message))
      .catch(() => console.log('Send message fail!'));
  }

}


