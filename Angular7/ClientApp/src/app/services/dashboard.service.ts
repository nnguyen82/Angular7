import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})

export class DashBoardService {
  private Url = 'api/dashboard/';
  private hubConnection: signalR.HubConnection;
  public data: any;

  constructor(private http: HttpClient) {
    this.startConnection();
    this.onReceiveMessage();
  }

  GetDashBoard(): Observable<any> {
    return this.http.get<any>(this.Url + 'GetDashBoard');
  }

  GetRandomStatistics(): Observable<any> {
    return this.http.get<any>(this.Url + 'GetRandomStatistics');
  }

  private startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("/dashboardHub")
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  private onReceiveMessage = () => {
    this.hubConnection.on('ReceiveStatistic', (data: any) => {
      this.data = data;
    });
  }

  public SendMessage(message: string) {
    this.hubConnection.send("SendNewMessage", message)
      .then(() => console.log('Message send: ' + message));
  }

}


