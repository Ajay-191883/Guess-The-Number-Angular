import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { InGameComponent } from './pages/in-game/in-game.component';
import { StartGameComponent } from './pages/start-game/start-game.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    StartGameComponent,
    InGameComponent,
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
