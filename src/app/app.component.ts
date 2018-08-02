import { Component } from '@angular/core';
import { SquareComponent } from './component/square/square.component';
import { BoardComponent } from './component/board/board.component';
import { GameComponent } from './component/game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
