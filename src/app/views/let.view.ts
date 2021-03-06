import {Component, ChangeDetectionStrategy} from '@angular/core';
import {of, Subject, BehaviorSubject} from 'rxjs';

@Component({
  selector: 'let-view',
  templateUrl: 'let.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetView {
  _tasks$ = new BehaviorSubject('task1');


  tasks$ = this._tasks$.asObservable();

  documents$ = of(['document1', 'document2']);
  loading$ = of(true);


  constructor() {
    setTimeout(() => this._tasks$.next('task2'), 2000);
  }

  ngDoCheck() {
    console.log('LetView Check Stuff');
  }
}