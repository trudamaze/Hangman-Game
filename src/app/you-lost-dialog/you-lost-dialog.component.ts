import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdateContextService } from '../services/update-context.service';

@Component({
  selector: 'app-you-lost-dialog',
  templateUrl: './you-lost-dialog.component.html',
  styleUrls: ['./you-lost-dialog.component.css']
})
export class YouLostDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YouLostDialogComponent>) { }

  ngOnInit(): void {
  }

  startNewGame() : void{
    this.dialogRef.close(null);
  }

}
