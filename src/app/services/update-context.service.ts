import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Context } from '../context';

@Injectable({
  providedIn: 'root'
})
export class UpdateContextService {

  private context : Context = {
    fullLife : 5,
    solutionIsSolved :false
  }

  private subject = new BehaviorSubject<Context>(this.context);

  constructor() { }

  setValue(lifeValue : number, solvedValue : boolean) {

    let updatedContext : Context = { 
      fullLife : lifeValue, 
      solutionIsSolved : solvedValue
    };

    this.subject.next(updatedContext);
  }

  getValue() {
    return this.subject.asObservable();
  }
}
