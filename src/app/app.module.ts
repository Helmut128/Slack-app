import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './screen/chat/chat.component';
import { SearchComponent } from './screen/search/search.component';
import { PruebaComponent } from './prueba/prueba.component';
import { EditorComponent } from './screen/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ChatComponent,
    SearchComponent,
    PruebaComponent,
    EditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
