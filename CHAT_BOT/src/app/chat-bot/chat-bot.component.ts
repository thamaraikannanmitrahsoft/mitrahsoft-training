import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../core/services/chat.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  constructor(public chatService: ChatService) { }
  isshow: boolean = false;
  messages: Message[] = [];
  value: string = '';
  conversation = new Subject<Message[]>();
  ngOnInit() {
    this.conversation.subscribe((newMessages: Message[]) => {
      this.messages = [...this.messages, ...newMessages];
    });
  }
  sendMessage() {
    if (this.value.trim()) {
      this.getBotAnswer(this.value.trim());
      this.value = '';
    }
  }
  getBotAnswer(msg: string) {
    const userMessage = new Message("user", msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message("bot", this.getBotMessage(msg));
    this.isshow = true;
    setTimeout(() => {
      this.conversation.next([botMessage]);
      this.isshow = false;
    }, 1500);
  }
  getBotMessage(question: string) {
    let answer = this.chatService.messageMap[question];
    return answer || this.chatService.messageMap["default"];
  }
}