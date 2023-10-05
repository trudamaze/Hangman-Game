import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdateContextService } from '../services/update-context.service';

@Component({
  selector: 'app-you-won-dialog',
  templateUrl: './you-won-dialog.component.html',
  styleUrls: ['./you-won-dialog.component.css']
})
export class YouWonDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YouWonDialogComponent>) { }

  ngOnInit(): void {
  }

  startNewGame(): void{
    this.dialogRef.close(null);
  }
}
