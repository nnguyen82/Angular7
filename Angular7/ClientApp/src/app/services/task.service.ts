import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as signalR from "@aspnet/signalr";
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private Url = 'api/Task/';
  private hubConnection: signalR.HubConnection;
  public data: any;
  public count: any;

  constructor(private http: HttpClient) {
    this.startConnection();
    this.onReceiveMessage();
  }

  Save(vm: any): Observable<any> {
    return this.http.post(this.Url, vm, { responseType: 'text' });
  }


  private startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("/taskHub")
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  private onReceiveMessage = () => {
    this.hubConnection.on('ReceiveTask', (data: any) => {
      this.data = data;
    });
  }

  public SendMessage(message: string) {
    this.hubConnection.send("SendNewMessage", message)
      .then(() => console.log('Message send: ' + message));
  }
}


