import { Component, OnInit } from '@angular/core';
import { BoardComponent } from '../board/board.componnent';
import {ShareService} from '../../service/share.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

	status : string = "Next play X";
	xIsNext: boolean = true;
	squares: any[] = Array(16).fill(null);
	clicked: [] = [];
	roadWin: [] = [];

  	constructor(private _shareService : ShareService) { }

  	ngOnInit() {
  		this._shareService.currentNameSubject.subscribe((val) => {
  			if (this.clicked.indexOf(val) < 0) {
  				this.setState(val);
  			}
		})
 	}

 	setState(val: number): void {
  		this.clicked.push(val);
		this.squares[val] = this.xIsNext ? 'X' : 'O';
	    this.xIsNext = !this.xIsNext;

	    let winner = this.calculateWinner(this.squares);
	    
	    if (winner) {
	    	this.status = "winner:" + winner;
	    	this._shareService.setRoadWin(this.roadWin);
	    } else {
	    	this.status = this.xIsNext ? "Next play X" : "Next play O";
	    }
  	}

  	calculateWinner(squares: any[]): any {
		const lines = [
		    [0,  1,  2,    3],
		    [4,  5,  6,    7],
		    [8,  9,  10,  11],
		    [12, 13, 14,  15],
		    [0,  4,  8,   12],
		    [1,  5,  9,   13],
		    [2,  6,  10,  14],
		    [3,  7,  11,  15],
		    [0,  5,  10,  15],
		    [3,  6,  9,   12],
		];
	  	for (let i = 0; i < lines.length; i++) {
		    const [a, b, c, d] = lines[i];
		    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
				this.setRoadWinner(a, b, c, d);     	
		      	return squares[a];
		    }
		}
	 	return null;
	}

	setRoadWinner(a: number, b: number, c: number, d: number): void {
		this.roadWin.push(a);
     	this.roadWin.push(b);
     	this.roadWin.push(c);
     	this.roadWin.push(d);
	}


}
