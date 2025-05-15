import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket!: Socket;
  url: string = Environments.url
  socketId!: any;
  constructor() {
  }
  connectSocket() {
    this.socket = io(this.url);
  }
  disconnectSocket(){
    if(this.socket){
      this.socket.disconnect()
      console.log('discon');
    }
  }
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }
  on(event: string): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(event, (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.off(event);
      };
    });
  }
}