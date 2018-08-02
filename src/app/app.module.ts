import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SquareComponent } from './component/square/square.component';
import { BoardComponent } from './component/board/board.component';
import { GameComponent } from './component/game/game.component';
import { ShareService } from './service/share.service';


@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
