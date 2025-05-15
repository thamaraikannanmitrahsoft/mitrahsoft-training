import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Employee Details';
  public isshow: boolean = true
  public selectedImage: string = ''
  public submitText: string = ''
  public inputName: string = ''
  public inputEmail: string = ''
  public inputPassword: string = ''
  public inputDob: string = ''
  inputRadio: string = '';
  inputDropdwon: string = '';
  onChange(event: any) {
    this.inputRadio = event.target.value;
  }
  public inputSalary: number = 0
  public inputStatus: boolean = false
  onSelect(path: string) {
    this.selectedImage = path
  }
  displayInformation() {
    this.isshow = false
    this.submitText = 'Form Submitted Successfully'
  }
}