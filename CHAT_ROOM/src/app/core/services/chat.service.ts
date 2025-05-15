import { Injectable } from "@angular/core";
export class Message {
  constructor(public author: string, public content: string) { }
}
@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor() { }
  messageMap: any = {
    Hi: "Hello",
    "Who are you": "My name is Angular Bot",
    "What is Angular": "Angular is the best framework ever",
    default: "Hey i can't understand you. Try typing something else!"
  };
}