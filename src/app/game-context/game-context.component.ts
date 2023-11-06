import { Component, OnInit } from '@angular/core';
import { Solution } from '../solution';
import { UpdateContextService } from '../services/update-context.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { YouLostDialogComponent } from '../you-lost-dialog/you-lost-dialog.component';
import { ChooseWordService } from '../services/choose-word.service';

@Component({
  selector: 'app-game-context',
  templateUrl: './game-context.component.html',
  styleUrls: ['./game-context.component.css']
})
export class GameContextComponent implements OnInit {

  public solution : Solution = {
    word : '',
    category : '',
    imagePath : ''
  }

  public lives : string[] = [];

  constructor(private updateContextService: UpdateContextService, private chooseWordService: ChooseWordService, 
    private dialog: MatDialog) {
     }

  ngOnInit(): void {
    this.updateContextService.getValue().subscribe(value => {
      if(value.fullLife === 5){
        this.lives = ['favorite', 'favorite', 'favorite', 'favorite', 'favorite'];

        this.chooseWordService.getCurrentSolution().subscribe(value => {
          this.solution = value;   
        });
      }
      if(value.fullLife < 5){
        this.lives[value.fullLife] = 'favorite_border';
      }
      if(value.fullLife === 0){
        this.openDialog();
      }
    });
  }
  
  openDialog(): void {    
    let dialogRef = this.dialog.open(YouLostDialogComponent, {
        width: '50%',
        disableClose : true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateContextService.setValue(5, false);
    });
  }

}
