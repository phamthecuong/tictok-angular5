import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareService {

	roadWin: [] = [];
	num: number = null;
	currentNameSubject = new BehaviorSubject(this.num);
	currentRoadSubject = new BehaviorSubject(this.roadWin);

  	constructor() { }

  	setNum(num: number) {
  		this.currentNameSubject.next(num);
	}

	getNum() {
  		return this.currentNameSubject.getValue();
	}

	setRoadWin(road: []) {
  		this.currentRoadSubject.next(road);
	}
}
