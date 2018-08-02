import { Component, OnInit, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import {ShareService} from '../../service/share.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  	@Input() num: number;
  	@Input() square: string;
  	@Input() road: [];

  	classRoad: boolean = false;

  	constructor(private _shareService : ShareService) {}

  	ngOnInit() {
  		this._shareService.currentRoadSubject.subscribe((val) => {
  			if (val.indexOf(this.num) >= 0) {this.classRoad = true}
		})
 	}

  	clickFn(): void {
  		this._shareService.setNum(this.num);
  	}
}
