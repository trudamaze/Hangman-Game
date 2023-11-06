import { Component, OnInit } from '@angular/core';
import { Solution } from '../solution';
import { UpdateContextService } from '../services/update-context.service';
import { ChooseWordService } from '../services/choose-word.service';
import { MatDialog } from '@angular/material/dialog';
import { YouWonDialogComponent } from '../you-won-dialog/you-won-dialog.component';

@Component({
  selector: 'app-play-field',
  templateUrl: './play-field.component.html',
  styleUrls: ['./play-field.component.css']
})
export class PlayFieldComponent implements OnInit {

  public solution : Solution = {
    word : '',
    category : '',
    imagePath : ''
  }

  public lettersKnown : string[] = [];
  public lettersToGuess : string[] = [];
  public life : number = 5;

  constructor(private updateContextService: UpdateContextService, private chooseWordService: ChooseWordService,
    private dialog: MatDialog) { 
  }

  ngOnInit(): void {
    this.updateContextService.getValue().subscribe(value => {
      if(value.fullLife === 5 && value.solutionIsSolved === false){
        this.resetGame();
      }
    });
  }
  
  newInput(letter : string) : void {
    if(letter === null || undefined){ return; }
    if(letter === ''){ return; }
    if(letter === ' '){ return; }
    if(!isNaN(Number(letter))){ return;}

    letter = letter.toUpperCase();

    if(letter === this.lettersToGuess[0]){
      this.lettersKnown[this.lettersKnown.length] = this.lettersToGuess[0];
      this.lettersToGuess.shift();

      if(this.lettersToGuess.length === 0){
        this.openDialog();
      }
    }
    else{
      this.life--;
      this.updateContextService.setValue(this.life, false);
    }

  }

  resetGame() : void{
    this.lettersKnown = [];
    this.lettersToGuess = [];

    this.chooseWordService.chooseNewWord();
    this.chooseWordService.getCurrentSolution().subscribe(value => {
      this.solution = value;
    });

    this.life = 5; 
    
    this.lettersKnown[0] = this.solution.word[0];

    for(let i = 0; i < this.solution.word.length-1; i++){
      this.lettersToGuess[i] = this.solution.word[i+1];   
    }
  }

  openDialog(): void {    
    let dialogRef = this.dialog.open(YouWonDialogComponent, {
        width: '50%',
        disableClose : true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetGame();

      this.updateContextService.setValue(this.life, false);
    });
  }

}
