import { Component } from '@angular/core';
import { AdminService } from 'src/app/shared/data-access/admin.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  constructor(private adminService: AdminService) { }
  
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
    this.adminService.onChat(data).subscribe((response : any) => {
      this.loading = false
      this.response = response.response
    })
  }
}
