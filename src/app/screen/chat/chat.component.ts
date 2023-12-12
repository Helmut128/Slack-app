import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  showSubmenu: boolean = false;

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }
}
