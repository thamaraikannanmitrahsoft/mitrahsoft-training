import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService, Message } from '../core/services/chat.service';
import { Subject, Subscription } from 'rxjs';
import { SocketService } from '../core/services/socket.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  currentUser: string = 'Thamaraikannan';
  toUser: string = 'Hari';
  onlineUsers: any[] = [];
  messages: any[] = []
  newMessage: string = '';
  base64Background: any = '../../assets/chatBackground.jpeg'
  isshow: boolean = true;
  isemojiSelect: boolean = false;
  chatOpen: boolean = false;
  liveUser!: string;
  constructor(public chatService: ChatService, private socketService: SocketService, private http: HttpClient) {
  }
  value: string = '';
  conversation = new Subject<Message[]>();
  ngOnInit() {
  }
  toggleEmoji() {
    this.isemojiSelect = !this.isemojiSelect
  }
  addEmoji(event: any) {
    this.value += event.emoji.native;
  }
  getImage(event: any) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      const updatedBackground = reader.result as string
      this.base64Background = updatedBackground
    }
    reader.readAsDataURL(file);
  }
  sendMessage() {
    this.value = this.value.trim()
    if (this.value.length > 0 && this.liveUser == this.toUser) {
      let newMessage = {
        sender: this.currentUser,
        to: this.toUser,
        message: this.value
      }
      this.socketService.emit('sendMessage', newMessage);
      this.value = '';
    }
    else {
      return
    }
  }
  openChatScreen() {
    this.chatOpen = true
  }
  onConnect() {
    this.socketService.connectSocket();
    this.socketService.emit('registerUser', this.currentUser)
    this.socketService.on('onlineUsers').subscribe((data) => {
      this.onlineUsers = data.filter((user: any) => user !== this.currentUser)
      this.liveUser = this.onlineUsers[0];
    });
    this.socketService.on('newMessage').subscribe((data) => {
      this.messages.push(data)
    })
    this.getMessageList()
    this.isshow = false;
  }
  clearMessages() {
    this.socketService.emit('deleteAllMessages', '')
  }
  getMessageList() {
    this.socketService.on('messageList').subscribe((data) => {
      this.messages = data;
    })
  }
  ngOnDestroy() {
    this.socketService.disconnectSocket()
  }
}