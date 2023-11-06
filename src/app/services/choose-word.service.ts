import { Injectable } from '@angular/core';
import { Solution } from '../solution';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ChooseWordService {

  private ct :number = 0;
  public currentSolution : Solution = {
    word: '',
    category: '',
    imagePath: ''
  }

  private solutionArray: Solution[] = [
    {
      word : 'BANANA',
      category : 'fruits',
      imagePath : '/assets/media/fruit.png'
    },
    {
      word : 'MELON',
      category : 'fruits',
      imagePath : '/assets/media/fruit.png'
    },
    {
      word : 'CHERRY',
      category : 'fruits',
      imagePath : '/assets/media/fruit.png'
    },
    {
      word : 'HORSE',
      category : 'animals',
      imagePath : '/assets/media/bear.png'
    },
    {
      word : 'BEE',
      category : 'animals',
      imagePath : '/assets/media/bear.png'
    },
    {
      word : 'GRAPES',
      category : 'fruits',
      imagePath : '/assets/media/fruit.png'
    },
    {
      word : 'CROCODILE',
      category : 'animals',
      imagePath : '/assets/media/bear.png'
    }
  ]
  
  private subject = new BehaviorSubject<Solution>(this.currentSolution);
  constructor() {
  }

  chooseNewWord() : void{
    //this.currentSolution = this.solutionArray[Math.floor(Math.random() * 5)];
    this.currentSolution = this.solutionArray[this.ct];
    this.ct++;
    
    this.subject.next(this.currentSolution);
  }

  getCurrentSolution(){
    return this.subject.asObservable();
    
  }
}
