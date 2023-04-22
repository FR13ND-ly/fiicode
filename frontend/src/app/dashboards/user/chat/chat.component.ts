import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/data-access/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  
  constructor(private userService: UserService) { }
  
  text = ""
  request = ""
  response = ""
  loading = false

  onMessage() {
    let data = {
      prompt : this.text
    }
    this.request = this.text
    this.text = ""
    this.loading = true
    this.response = ""
    this.userService.onChat(data).subscribe((response : any) => {
      this.loading = false
      this.response = response.response
    })
  }
}
