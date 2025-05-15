import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../core/services/chat.service';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
  base64Background: any = '../../assets/chatBackground.jpeg'
  isemojiSelect: boolean = false
  inputString!: string;
  responseMap: Record<string, string> = {};
  excelData: any[] = [];
  obj: any = {};
  constructor(public chatService: ChatService, private toastr: ToastrService) { }
  isshow: boolean = false;
  messages: Message[] = [];
  value: string = '';
  conversation = new Subject<Message[]>();
  ngOnInit() {
    this.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.value = this.value.trim().toLowerCase()
    if (!this.value) return;
    this.inputString = this.value
    const userMessage = new Message('user', this.value);
    this.conversation.next([userMessage]);
    const userInput = this.value;
    const botReply = this.responseMap[userInput] || "I'm sorry! I don't have access to this information yet. Kindly upload any excel file so that i can help you.";
    const botMessage = new Message('bot', botReply);
    this.isshow = true;
    setTimeout(() => {
      this.conversation.next([botMessage]);
      this.isshow = false;
    }, 1000);
    const isPresent = Object.keys(this.responseMap).includes(this.inputString)
    if (!isPresent) {
      this.obj = this.inputString
      this.excelData.push({ questions: this.obj })
    }
    this.value = '';
  }
  onImport(event: any) {
    this.toastr.success("File uploaded successfully!", '', {
      timeOut: 1500
    })
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      console.error('No file selected');
      return;
    }
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target!.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json<any>(sheet, { defval: '' });
      this.responseMap = {};
      json.forEach((row: any) => {
        const keys = Object.keys(row);
        if (keys.length >= 2) {
          this.responseMap[row[keys[0]].trim().toLowerCase()] = row[keys[1]];
        }
      });
    };
    reader.readAsArrayBuffer(file);
  }
  onExport() {
    if (this.excelData.length < 1) {
      this.toastr.error("Nothing to export. Ask something.", '', {
        timeOut: 1000
      })
      return;
    }
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.excelData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout: ArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'exported-data.xlsx');
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

}